<template>
    <div class="main">
        <div> 當前值==> {{n}}</div>
        <div v-big="n"> 放大後的值==> </div>
        <div><button @click="addNum">點+1</button></div>
        <hr>
        <div><input type="text" v-blur="n"></div>
    </div>
</template>
<script>
import Input from '../../components/communication/Input.vue';
import big from "./big";
import blur from "./big"
export default {
  components: { Input },
    data(){
        return{
            n:1
        }
    },
    // 組件引用指令
    directives:{
        big,
        blur

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
