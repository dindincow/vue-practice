<template>
	<div class="main">
       {{nickName}}
	</div>
</template>
<script>

export default {
    data(){
        return{
            nickName:"牛牛"
        }
    },
    methods:{
        changeNickName(){
            this.nickName = "cowcow"
        }
    }
   
}
</script>
<style lang="scss" scoped>
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