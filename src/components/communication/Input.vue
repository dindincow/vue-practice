<template>
	<div class="main">
        <input type="text" v-model="title">
        <button class="btn" @click="add">增 加</button>
	</div>
</template>
<script>
import eventBus from "@/components/communication/event-bus"
export default {
    data(){
        return{
           title:""
        }
    },
    methods:{
        add(){
            // this.$emit('add',title);
            eventBus.$emit('addItem',this.title)
            this.title = '';
        } 
    },
    mounted() {
        
    },
}
</script>
<style lang="scss" scoped>
input{
    height: 32px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
}
.btn{
    background: #27a052;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    margin-left: 15px;
    color: #fff;
    cursor: pointer;
    &:hover{
        background: #0e7732;
    }
}
</style>