<template>
	<div class="main">
        <div>我是組件A -  {{commonData}}</div>
        <button @click="compAmethods">組件A按鈕</button>
        <button @click="commonMethods">共用方法</button>
	</div>
</template>
<script>
import mixin from "./mixin"
export default {
    mixins:[mixin],
    data(){
        return{
            aData:"這事組件a自己內部用的data",
            commonData:"共用訊息AAA"
        }
    },
    methods:{
        compAmethods(){
            console.log("這是只有 compA 自己才有的方法");
        },
        // commonMethods(){
        //     console.log("大家都會有的方法");
        // }
    },
    mounted() {
        console.log("組件A mounted");
        // console.log("common mounted");
    },
}
</script>