<template>
  <v-container>
    <v-layout justify-center class="pt-5" dark>
      <v-flex xs12 sm8>
        <v-card>
          <v-card-title>
            <v-card-text>
              <h2
                class="text-xs-center display-3 font-weight-light cyan--text text--darken-3 pt-5"
              >Welcome</h2>
            </v-card-text>
          </v-card-title>
          <v-form @submit.prevent="enterChat">
            <v-layout justify-center>
              <v-flex xs10>
                <v-text-field v-model.trim="name" label="Enter your name" color="cyan darken-3"></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
          <v-layout justify-center>
            <p v-if="feedback" class="red--text text--accent-3 subheading">Name cannot be empty</p>
          </v-layout>
          <v-layout justify-center class="pb-5">
            <v-btn @click="enterChat" color="cyan darken-3 white--text">Enter Chat</v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      feedback: false
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
        localStorage.setItem('userName', this.name);
      } else {
        this.feedback = true;
      }
    }
  }
};
</script>

<style scoped lang='scss'>
</style>