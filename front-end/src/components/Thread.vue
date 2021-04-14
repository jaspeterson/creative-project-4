<template>
    <section class="thread">
        <div class="thread-container">
            <div class="thread-details">
                <div class="thread-rating">
                    <input type="checkbox" v-model="checked" class="vote"/>
                    <div class="rating-text">{{ thread.rating }} points</div>
                </div>
                <div>{{formatDate(thread.posted)}}</div>
            </div>
            <p class="thread-text">{{ thread.text }}</p>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default ({
    name: 'Thread',
    props: {
        threadID: String
    },
    data() {
        return {
            thread: {},
            checked: false
        }
    },
    created() {
        this.getThread();
    },
    methods: {
        formatDate(date) {
            if (moment(date).diff(Date.now(), 'days') < 15)
                return moment(date).fromNow();
            else
                return moment(date).format('d MMMM YYYY');
        },
        async getThread() {
            try {
                let response = await axios.get("/api/thread/" + this.threadID);
                this.thread = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
})
</script>

<style scoped>
.thread-container {
    box-shadow: 5px 5px 10px 2px gray;
    padding: 10px;
    margin: 20px;
    border-radius: 25px;
    text-align: left;
    display: flex;
}

.thread-details {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    justify-content: center;
}

.thread-text {
    padding: 10px;
}

.thread-rating {
    border-bottom: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.rating-text {
    text-align: center;
}

.vote {
    margin: auto;
}

.star {
    visibility:hidden;
    font-size:60px;
    cursor:pointer;
    content: "\2605";
    margin: auto;
}

.star:checked:before {
   content: "\2605";
   position: absolute;
}

.star:before {
   content: "\2606";
   visibility: visible;
   position: absolute
}
</style>
