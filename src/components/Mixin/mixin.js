export default {
    data(){
        return{
            commonData:"共用訊息"
        }
    },
    methods:{
        commonMethods(){
            console.log("大家都會有的方法");
        }
    },
    mounted() {
        console.log("common mounted");
    },
}