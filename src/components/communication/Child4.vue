<template>
	<div class="main">
        
        <button class="btn" @click="$listeners.changeName">改父組件 name 值</button>
        <GrandChild v-bind="$attrs"/>
	</div>
</template>
<script>
import GrandChild from "@/components/communication/GrandChild"
export default {
    components:{
        GrandChild
    },
    methods:{
        
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