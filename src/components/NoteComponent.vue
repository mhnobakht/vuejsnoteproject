<template>
    <div class='container'>
        <h1>Note Component!</h1>
        <hr>
        <progress-component :totalnotes="totalNotes"></progress-component>
        <form-component @newmessage="getNewMessage"></form-component>
        <card-component :messages="messages" @messageid="removeMessageById"></card-component>
    </div>
</template>

<script>
import ProgressComponent from './noteComponents/ProgressComponent.vue';
import FormComponent from './noteComponents/FormComponent.vue';
import CardComponent from './noteComponents/CardComponent.vue';

export default {
    name: "NoteComponent",
    data() {
        return {
            totalNotes: 0,
            messages : [],
        }
    },
    components: {
        ProgressComponent,
        FormComponent,
        CardComponent
    },
    methods: {
       getNewMessage(event) {
           if(this.messages.length < 9) {
               this.messages.push(event);
                this.totalNotes++;
           }else{
               alert('Note Full');
           }
       },
       removeMessageById(event) {
           this.messages.splice(event, 1);
           this.totalNotes--;
       }
    }
}
</script>

<style scoped>
.container {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    font-family: arial;
}
h1 {
    text-align: center;
    color: #333;
}
</style>