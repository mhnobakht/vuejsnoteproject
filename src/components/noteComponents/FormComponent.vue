<template>
    <div class="container">
        <form class="form-inline">
            <input v-model="message" type="text" placeholder="Enter your note here...">
            <button type="button" @click="addMessage">Add Note</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormComponent',
    data() {
        return {
            message: ''
        }
    },
    methods: {
        addMessage(event) {
            event.preventDefault();
            this.$emit('newmessage', this.message);
            this.message = '';
        }
    }
}
</script>

<style scoped>
.container {
    width: 95%;
    margin: 25px auto;
    font-family: arial;
}
.form-inline {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}
.form-inline input {
    vertical-align: middle;
    margin: 5px 10px 5px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border: none;
    border-bottom: 1px solid #5352ed;
    border-radius: 3px;
    outline: none;
    transition: all 0.1s ease-in-out;
    flex: 80%;
}
.form-inline input:focus {
    border-bottom: 2px solid #5352ed;
}
.form-inline button {
    padding: 10px 20px;
    background-color: #5352ed;
    color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    flex: 15%;
}
.form-inline button:hover {
    cursor: pointer;
    background-color: royalblue;
}
</style>