<template>
    <div class="container">
        <div class="wrapper">
            <div class="progress-bar">
                <span class="progress-bar-fill" :style="{width: ((totalnotes*100)/9)+'%'}">{{totalnotes}}/9</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressComponent',
    props: ['totalnotes']
}
</script>

<style scoped>
.container {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    font-family: arial;
}
.wrapper {
    width: 100%;
}
.progress-bar {
    width: 100%;
    background-color: #e0e0e0;
    padding: 5px;
    border-radius: 3px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);
    overflow: hidden;
}
.progress-bar-fill {
    display: block;
    height: 22px;
    background: linear-gradient(to right, #5352ed, deepskyblue);
    border-radius: 3px;
    text-align: center;
    line-height: 22px;
    color: #fff;
    transition: all 1s ease-in-out;
    position: relative;
}
</style>