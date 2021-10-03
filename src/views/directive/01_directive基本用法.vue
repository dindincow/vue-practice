<template>
    <div class="main">
        <div> 當前值==> {{n}}</div>
        <div v-big="n"> 放大後的值==> </div>
        <div><button @click="addNum">點+1</button></div>
    </div>
</template>
<script>
import big from "./big"
export default {
    data(){
        return{
            n:1
        }
    },
    // 組件引用指令
    directives:{
        big
    },
    methods:{
        addNum(){
            this.n = this.n+1;
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
    color: #fff;
    font-size: 30px;
}
</style>
