<template>
    <div class="container">
        <div class="card" @click="removeMessage" v-for="(message, index) in messages" :key="message">
            <div class="card-body">
                <p :messageid="index">{{message}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['messages'],
    methods: {
        removeMessage(event) {
            this.$emit('messageid', event.target.attributes.messageid.value);
        }
    }
}
</script>

<style scoped>
.container {
    width: 95%;
    margin: 50px auto;
    font-family: arial;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 10px 50px;
}

.card {
    box-shadow: 6px 6px 8px rgba(0,0,0,0.3);
    width: 30%;
    border-radius: 5px;
    border-top: 2px solid #5352ed;
    transition: all 0.36s ease-in-out;
    font-size: 1.1rem;
    padding: 2px 3px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
    transform: scale(1.03);
}
</style>