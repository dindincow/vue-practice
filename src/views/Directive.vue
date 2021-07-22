<template>
    <div class="page">
        <div class="nav">
            <a href="#">Menu1</a>
            <a href="#">Menu2</a>
            <a href="#">Menu3</a>
            <a href="#">Menu4</a>
            <a href="#" v-outsideHideClick="toggleDropDown">
                <i class="iconfont">&#xf10c;</i>
                <div class="dropDown" v-show="isShowDropDown">
                    下拉選單訊息
                </div> 
            </a>
        </div>
        <!-- <div v-outsideHideClick>Directive</div> -->
    </div>
</template>
<script>
// import {outsideHideClick} from "@/directive/outside-hide-click"
export default {
    // 組件引用指令
    // directives:{
    //     outsideHideClick
    // }
    data(){
        return{
            isShowDropDown:false
        }
    },
    methods:{
        toggleDropDown(){
            console.log("12313")
            this.isShowDropDown = !this.isShowDropDown;
        }
    }
}
</script>
<style lang="scss" scoped>
.page{
    .nav{
        display: flex;
        background: rgb(170, 147, 43);
        border: 1px solid #d9c360;
        a{
            font-size: 16px;
            padding: 10px 15px;
            border-right: 1px solid #d9c360;
            position: relative;
            color: #fff;
            &:last-child{
                margin-left: auto;
            }
            &:hover{
                color: #554605;
            }
        }
        .dropDown{
            position: absolute;
            width: 150px;
            height: 120px;
            top: 100%;
            left: 50%;
            text-align: center;
            line-height: 120px;
            transform: translateX(-50%);
            background: #f0f0f0;
            border: 1px SOLID #aa932b;
            border-radius: 10px;
            color: #272429;
        }
    }
}
</style>