<template>
	<div class="main">
        {{num}} <button class="btn" @click="changeNum">改父組件值</button>
	</div>
</template>
<script>

export default {
    data(){
        return{
           num:10
        }
    },
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