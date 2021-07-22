<template>
	<div class="main">
        <ul ref="myUl">
            <li v-for="(item,index) in list" :key="index">
                {{item}}
            </li>
        </ul>
        <button @click="addItem">增加項目</button>
	</div>
</template>

<script>

export default {
	data(){
        return{
            list:["香蕉","草莓","紅毛丹"]
        }
    },
    methods:{
        addItem(){
            this.list.push(`${Date.now()}`);
            this.list.push(`${Date.now()}`);
            this.list.push(`${Date.now()}`);

            this.$nextTick(()=>{
                const ulDom = this.$refs.myUl;
                console.log("ul中有幾個li呢?====>",ulDom.childNodes.length)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
li,ul{
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 10px 0;
}
.main{
    margin: 50px auto;
    padding: 20px;
    width: 500px;
    padding: 15px;
    color: #fff;
    background:rgb(100, 96, 110);
}
</style>