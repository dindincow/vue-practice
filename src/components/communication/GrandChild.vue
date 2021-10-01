<template>
	<div class="main">
        <p> 可值接獲取爺爺組件中的屬性</p>
        <p>姓名: {{$attrs.name}}</p>
        <p>年紀: {{$attrs.age}}</p> 
	</div>
</template>
<script>
import GrandChild from "@/components/communication/GrandChild"
export default {
    data(){
        return{
           
        }
    },
    comments:{
        GrandChild
    },
    methods:{
       
        
    },
    mounted() {
        
    },
}
</script>
<style lang="scss" scoped>
p{
    margin: 15px;
    color: azure;
}
</style>