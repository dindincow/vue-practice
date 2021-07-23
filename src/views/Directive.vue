<template>
    <div class="page">
        <!-- 例子1 -->
        <div class="row row1">
            <h2>下拉選單點擊其他區域隱藏</h2>
            <div class="nav">
                <a href="#">Menu1</a>
                <a href="#">Menu2</a>
                <a href="#">Menu3</a>
                <a href="#">Menu4</a>
                <!-- <div v-outsideHideClick>Directive</div> -->
                <a href="#" v-outsideHideClick="toggleDropDown">
                    <i class="iconfont">&#xf10c;</i>
                    <div class="dropDown" v-show="isShowDropDown">
                        下拉選單訊息
                    </div> 
                </a>
            </div>
        </div>

        <!-- 例子2 -->
        <div class="row row2">
            <h2>tab選單</h2>
            <div class="tab" v-navActive="{
                className:'tab_item',
                activeClass:'active',
                currentIndex,
            }">
                <div class="tab_item" 
                    v-for="(item,index) in dataList" 
                    :key="index"
                    @click="changeIndex(index)"
                >{{item}}</div>
           </div>
        </div>
        
    </div>
</template>
<script>
import navActive from "@/directive/navActive"
export default {
    // 組件引用指令
    directives:{
        navActive
    },
    data(){
        return{
            isShowDropDown:false,
            dataList:["項目1","項目2","項目3"],
            currentIndex:0
        }
    },
    methods:{
        toggleDropDown(){
            this.isShowDropDown = !this.isShowDropDown;
        },
        changeIndex(index){
            console.log(index)
            this.currentIndex = index;
        }
        
    }
}
</script>
<style lang="scss" scoped>

.page{
    .row{
        h2{
            color: #fff;
            font-size: 20px;
            margin-bottom: 15px;
            font-weight: 400;
        }
        padding-bottom: 50px;
        border-bottom: 1px solid #5d5d5d;
    }
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
    .row2{
        margin-top: 50px;
        .tab{
            width: 300px;
            display: flex;
            .tab_item{
                padding: 10px 15px;
                text-align: center;
                width: 100px;
                border:1px solid rgb(207, 111, 127);
                
                color: #f0f0f0;
                &.active{
                    background: rgb(207, 111, 127);
                }
            }

        }
    }
    
}
</style>