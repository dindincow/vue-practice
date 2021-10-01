<template>
	<div class="main">
        <ul>
            <li v-for="(item,index) in data" :key="index">{{item}}</li>
        </ul>
	</div>
</template>
<script>
import eventBus from "@/components/communication/event-bus"
export default {
    data(){
        return{
           data:["洗碗","做功課","寫javascript"]
        }
    },
    methods:{
       handleAdd(title){
           console.log("title",title);
           this.data.push(title)
       }
        
    },
    mounted() {
        eventBus.$on('addItem',this.handleAdd)
    },
    beforeDestroy(){
        eventBus.$off('addItem',this.handleAdd)
    }
}
</script>
<style lang="scss" scoped>
ul {
    margin-top: 15px;
    li{
        color: aliceblue;
        line-height: 27px;
    }
}
</style>