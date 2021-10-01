<template>
	<div class="main">
        {{msg}} <button class="btn" @click="handleClick">更新父組件值</button>
       
	</div>
</template>
<script>

export default {
    props:{
        msg:{
            type:String,
            default:''
        },
       
    },
    data(){
        return{
           num:10
        }
    },
    methods:{
        handleClick(){
            this.$emit('changeMsg1','hsieh')
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
}
</style>