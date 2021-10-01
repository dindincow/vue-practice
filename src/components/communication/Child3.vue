<template>
	<div class="main">
        {{myMsg}} 
	</div>
</template>
<script>

export default {
    data(){
        return{
           num:10
        }
    },
    inject:['myMsg'],
   
    methods:{
        changeNum(){
            this.$parent.fatherNum="100000"
        }
        
    },
    mounted() {
        
    },
}
</script>
<style lang="scss" scoped>
.main{
    color: #fff;
    .btn{
        background: #b9388e;
        padding: 10px 15px;
        border: none;
        border-radius: 10px;
        margin-left: 15px;
        color: #fff;
        cursor: pointer;
        &:hover{
            background: rgb(119, 14, 105);
        }
    }
}
</style>