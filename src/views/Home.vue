<template>
    <div class="search">
        <input type="text" value="search.."/>
        <span class="iconfont">&#xe602;</span>
    </div>
    <div class="banner">
        <img src="@/assets/img/banner.png" />
    </div>
    <div class="category">
        <ul>
            <li class="category_item" v-for="(item,index) in categoryList" :key="index">
                <i  class="category_item_icon iconfont" 
                    :class="{'active':index === curentCategoryIndex}" 
                    v-html="item.icon">
                </i>
               <span class="category_item_text">{{item.text}}</span>
            </li>
        </ul>
    </div>
    <div class="nearfood">
        <h3>附近美食</h3>
        <div class="nearfood_item">
            <div class="nearfood_item_img">
                <img src="@/assets/img/shop1.jpg">
            </div>
            <div class="nearfood_item_info">
                <div class="first_col">
                    <div class="name">呷富哥海鮮熱炒</div>
                    <div class="rate">平價:4</div> 
                </div>
                <div class="desc">三鮮熱炒，海鮮</div>
                <div class="desc">$69 (外送服務費)</div>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive,toRefs,ref} from 'vue';
export default {
    name: 'Home',
    setup(){
        const curentCategoryIndex = ref(0);
        // setTimeout(()=>{
        //     curentCategoryIndex.value = 1;
        // },2000)
        const categoryList = [
            {icon:`&#xe647;`,text:"飲料"},
            {icon:`&#xe663;`,text:"蛋糕"},
            {icon:`&#xeaff;`,text:"披薩"},
            {icon:`&#xe72b;`,text:"餐廳"},
            {icon:`&#xe61c;`,text:"健康餐"},
            {icon:`&#xec43;`,text:"漢堡"},
            {icon:`&#xe871;`,text:"麵點"},
        ]

        return {categoryList,curentCategoryIndex}
    }
}
</script>
<style lang="scss" scoped>
.search{
    padding: 20px 0;
    text-align: center;
    position:relative;
    input{
        height: 0.45rem;
        background: #f6f4f4;
        width: 90%;
        border-radius: .3rem;
        border: none;
        text-indent: .25rem;
        color: #8d8c8c;
        font-size: .14rem; 
    }
    span{
        position: absolute;
        right: 40px;
        top: 33px;
        color: #8d8c8c;
    }
}
.banner{
    width: 90%;
    margin: 0 auto;
    border-radius: 25px;
    overflow: hidden;
}
.category{
    width: 90%;
    margin: 20px auto;
    overflow: scroll;
    ul{
        width: 5.7rem;
        display:  flex;
        justify-content: space-between;
        .category_item{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            flex-wrap: nowrap;
            &_icon{
                width: 0.7rem;
                height: 0.7rem;
                background: #f6f4f4;
                border-radius: 0.2rem;
                text-align: center;
                line-height: .7rem;
                font-size: 0.3rem;
                color: #2a3b56;
                &.active{
                    color: #fff;
                    background: #f55b02;
                }
            }
            &_text{
                color: #2a3b56;
                font-size: .14rem;
                letter-spacing: 2px;
                margin-top: .1rem;
                font-weight: 600;
              
            }
           
        }
    }
}
.nearfood{
    padding:5%;
    h3{
        font-size: 20px;
        color: #2a3b56;
    }
}
</style>
