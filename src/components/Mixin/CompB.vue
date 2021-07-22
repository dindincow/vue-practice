<template>
	<div class="main">
        <div>我是組件B -  {{commonData}}</div>
         
        <button @click="compBmethods">組件B按鈕</button>
        <button @click="commonMethods">共用方法</button>
	</div>
</template>
<script>
import mixin from "./mixin"
export default {
    mixins:[mixin],
    data(){
        return{
            bData:"這事組件b自己內部用的data",
            //commonData:"共用訊息"
        }
    },
    methods:{
        compBmethods(){
            console.log("這是只有 compB 自己才有的方法");
        },
        // commonMethods(){
        //     console.log("大家都會有的方法");
        // }
    },
    mounted() {
        console.log("組件B mounted");
        //console.log("common mounted");
    },
}
</script>