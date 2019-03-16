<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h4
          class="text-xs-center display-1 font-weight-light cyan--text text--darken-3 pt-3"
        >Hello {{ name }}</h4>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5">
      <v-flex>
        <v-card class="py-3" height="400">
          <ul v-for="(message,index) in getMessages" :key="index">
            <li
              class="pr-2 pb-2 cyan--text text--darken-3 subheading font-weight-light"
            >{{ message.name }}</li>
            <li class="body-2 font-weight-light grey--text text--darken-2">{{ message.message }}</li>
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
import axiosBase from "@/axios_base";

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
  async created() {
    await this.$store.dispatch("messages/get");
  },
  computed: {
    getMessages() {
      return this.$store.state.messages.messages;
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