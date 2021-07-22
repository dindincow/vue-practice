<template>
	<div class="main">
        <div> 我的名子: {{firstName}} - {{lastName}} </div>
        <div> 我的名子(使用 methods) : {{allName(firstName,lastName)}} </div>
        <div> 我的名子(使用 watch) : {{watchfullName}} </div>
        <div> 我的名子(使用 computed) : {{fullName}} </div>
	</div>
</template>

<script>

export default {
	data(){
        return{
            firstName: 'Hsieh',
            lastName:'jessica',
            watchfullName:'',
        }
    },
    methods:{
        allName(firstName,lastName){
            console.log("methods觸發了")
            return  firstName +  lastName;
        }
    },
    watch:{
        firstName:{
            handler:function (newVal,oldVal) {
                this.watchfullName = newVal + ' ' + this.lastName;
            }, 
            immediate:true
        },
        lastName:{
            handler:function (newVal,oldVal) {
                this.watchfullName = this.firstName + ' ' + newVal;
            }, 
            immediate:true
        }

        // firstName(newVal,oldVal){
        //     this.watchfullName = newVal + ' ' + this.lastName;
        // },
        // lastName(newVal,oldVal){
        //     this.fullName = this.firstName + ' ' + newVal;
        // }
    },
    computed:{
        fullName(){
            console.log("computed觸發了")
            return  this.firstName +  this.lastName ;
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