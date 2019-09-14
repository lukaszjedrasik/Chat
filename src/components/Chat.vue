<template>
  <v-container class="py-0">
    <v-layout>
      <v-flex>
        <h4
          class="text-xs-center display-1 font-weight-light cyan--text text--darken-3 pt-3"
        >Hello {{ name }}</h4>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5">
      <v-flex>
        <v-card class="py-3" height="400" v-chat-scroll="{always:false, smooth:true}">
          <ul v-for="message in messages" :key="message.id">
            <li
              class="pr-2 pb-2 cyan--text text--darken-3 subheading font-weight-light"
            >{{ message.name }}</li>
            <li class="body-2 font-weight-light grey--text text--darken-2 dzban-message">{{ message.message }}</li>
            <li class="subheading grey--text caption font-weight-light pb-3">{{ message.time }}</li>
          </ul>
        </v-card>
        <NewMessage :name="name"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
 
<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
import { all } from "q";

export default {
  props: ["name"],
  components: { NewMessage },
  beforeRouteEnter(to, from, next) {
    if (to.params.name) {
      next();
    } else {
      next({ path: "/" });
    }
  },
  data() {
    return {
      messages: []
    };
  },
  async created() {
    try {
      let ref = await db.collection("messages").orderBy("time");

      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            let doc = change.doc;
            this.messages.push({
              id: doc.id,
              name: doc.data().name,
              message: doc.data().message,
              time: doc.data().time
            });
          }
        });
      });
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang='scss'>
li {
  list-style-type: none;
  display: inline-block;
  &:nth-child(3) {
    display: block;
  }
}
.v-card {
  overflow-y: auto;
}
</style>