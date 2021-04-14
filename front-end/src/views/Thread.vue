<template>
    <div>
        <thread-view :threadID=id />
        <form class="pure-form" @submit.prevent="postComment">
        <fieldset>
            <legend>Post a comment</legend>
            <textarea placeholder="Comment" v-model="commentText" />
            <button type="submit" class="pure-button pure-button-primary">Post</button>
        </fieldset>
        </form>
        <h1>Comments</h1>
        <hr>
    </div>
</template>

<script>
import axios from 'axios';
import ThreadView from '../components/ThreadView.vue';

export default ({
    name: "Thread",
    props: {
        id: String,
    },
    components: {
        ThreadView
    },
    data() {
        return {
            thread: {},
            comments: [],
            commentText: ''
        }
    },
    created() {
        this.getThread();
    },
    methods: {
        async getCommentList() {
            try {
                let response = await axios.get("/api/comment/" + this.id);
                this.comments = response.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getThread() {
            try {
                let response = await axios.get("/api/thread/" + this.id);
                this.thread = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
})
</script>

<style scoped>

</style>
