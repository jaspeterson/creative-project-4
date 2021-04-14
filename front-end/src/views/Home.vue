<template>
  <div class="home">
    <!-- post thread -->
    <form class="pure-form" @submit.prevent="postThread">
      <fieldset>
        <legend>Post a thread</legend>
        <textarea class="pure-u-1-2" placeholder="Thread content" v-model="threadText" />
        <button type="submit" class="pure-button pure-button-primary" @click.prevent="postThread">Post</button>
      </fieldset>
    </form>
    <!-- filter bar -->
    <!-- thread list -->
    <div class="thread-list">
      <div v-for="thread in threads" v-bind:key="thread._id">
        <router-link :to="{ name: 'ThreadView', params: { id: thread._id }}" class="thread-link"><thread :threadID=thread._id /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Thread from '../components/Thread.vue';

export default {
  components: { Thread },
  name: "Home",
  data() {
    return {
      threads: [],
      topics: [],
      filteredTopic: '',
      threadText: ''
    }
  },
  created() {
    this.getThreadList();
  },
  methods: {
    async getThreadList() {
      try {
        let response = await axios.get("/api/thread");
        this.threads = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async postThread() {
      if (!this.threadText)
        return;
      try {
        await axios.post("/api/thread", {
          text: this.threadText,
          topic: 'Testing'
        });

        this.getThreadList();
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.thread-link {
  text-decoration: none;
  color: black;
}
</style>