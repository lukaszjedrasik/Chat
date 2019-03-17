<template>
  <v-form @submit.prevent="addMessage">
    <v-flex>
      <v-card class="py-2">
        <v-text-field
          v-model.trim="message"
          class="mx-5 font-weight-light body-2"
          placeholder="message"
          color="cyan darken-3"
          prepend-inner-icon="send"
        ></v-text-field>
        <v-layout justify-center>
          <p
            v-if="feedback"
            class="red--text text--accent-3 font-weight-light subheading"
          >Message cannot be empty</p>
          <p
            v-if="sending"
            class="green--text text--accent-4 font-weight-light subheading"
          >{{ sending }}</p>
        </v-layout>
      </v-card>
    </v-flex>
  </v-form>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";

export default {
  props: ["name"],
  data() {
    return {
      message: "",
      feedback: false,
      sending: false
    };
  },
  methods: {
    async addMessage() {
      if (this.message) {
        try {
          this.feedback = false;
          this.sending = "Sending...";
          let response = await db.collection("messages").add({
            name: this.name,
            message: this.message,
            time: moment(Date.now()).format("lll")
          });
        } catch (e) {
          console.log(e);
        }
        this.message = "";
        this.sending = false;
      } else {
        this.feedback = true;
      }
    }
  }
};
</script>

<style scoped lang='scss'>
</style>