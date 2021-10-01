<template>
	<div class="main">
        <div class="row">
            <h3>(1) Props + $emit</h3>
            <!-- <Child :msg="msg1" @changeMsg1="msg1=$event"/> -->
            <!---和上面相同-->
            <Child1 :msg="msg1" @changeMsg1="changeMsg1"/>
        </div>
        <hr>
        <div class="row">    
            <h3>(2) $parent + $children</h3>
            <div class="box">
                父祖件的值 : {{fatherNum}} |
                子組件的值 :<Child2/>
                <button class="btn" @click="changeNum">改變子組件值</button>
            </div> 
        </div>
        <hr>
        <div class="row">    
            <h3>(3) Provide + inject</h3>
            <p>provide 可以在祖先組件中指定我們想要提供給後代組件的數據或方法，而在任何後代組件中，我們都可以使用 inject 來接收 provide 提供的數據或方法。</p>
            <div class="box">
                父祖件提供值給全部子組件用(包含它的孫子) : <Child3/>
            </div> 
        </div>
        <hr>
        <div class="row">    
            <h3>(4) $attrs + $listeners</h3>
            <div class="box">
                <Child4 :name="name" :age="age" @changeName="changeName"></Child4>
            </div> 
        </div>
         <hr>
        <div class="row">    
            <h3>(5) $ref</h3>
            <div class="box">
                <Child5 ref="child5"/>
                <button class="btn" @click="nickName">改變子組件值</button>
            </div> 
        </div>
	</div>
</template>
<script>
import Child1 from "@/components/communication/Child1"
import Child2 from "@/components/communication/Child2"
import Child3 from "@/components/communication/Child3"
import Child4 from "@/components/communication/Child4"
import Child5 from "@/components/communication/Child5"
export default {
    components:{
        Child1,
        Child2,
        Child3,
        Child4,
        Child5,
    },
    provide:{
        myMsg:"小蜜蜂"
    },
    
    data(){
        return{
           msg1:"jessica",
           fatherNum:1000,
           name:"dindin",
           age:18,
        }
    },
    methods:{
        changeMsg1(msg1){
            this.msg1 = msg1;
        },
        changeNum(){
            console.log(this.$children)
            this.$children[1].num=50;
            
        },
        changeName(){
            this.name = "叮叮"
        },
        nickName(){
            console.log("點擊前===>",this.$refs.child5.nickName);
            this.$refs.child5.changeNickName();
            console.log("點擊後===>",this.$refs.child5.nickName);
        }
        
    },
    mounted() {
        
    },
}
</script>
<style lang="scss" scoped>
.main{
    p{
        color: #ccc;
        margin-bottom: 15px;
    }
    h3{
        margin-bottom: 15px;
        color: rgb(19, 138, 243);
    }
    .row{
        margin-bottom: 30px;
        margin-top: 20px;
    }
    hr{
        border: 1px solid #373439;
    }
    .box{
        display: flex;
        align-items: center;
        color: azure;
    }
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