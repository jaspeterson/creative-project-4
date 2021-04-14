<template>
    <p>Welcome to thread: {{id}}</p>
</template>

<script>
// import axios from 'axios';

export default ({
    name: "Thread",
    props: {
        id: String,
    },
    data() {
        return {
            comments: []
        }
    },
    methods: {
        async getCommentList() {

        }
    }
})
</script>

<style scoped>

</style>
