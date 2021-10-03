<template>
	<div class="main">
		<div> 我的名子 :{{person.name}}</div>
        <div> 我的年齡 :{{person.age}}</div>
        <div> 我的性別 :{{person.sex}}</div>
        <div> 我的愛好 :{{person.hobby}}</div>
        <button @click="addSex"> 新增性別 </button>
        <button @click="deleteName"> 刪除屬性Name </button>
        <button @click="changeHobby"> 修改陣列值 </button>
	</div>
</template>

<script>

export default {
	data(){
        return{
            person:{
                name:"jessica",
                age:"18",
                hobby:['逛街','睡覺']
            }  
        }
    },
    methods:{
        addSex(){
            // 無法從新渲染畫面
            // this.person.sex = "女";
            this.$set(this.person,'sex','女')
          
        },
        deleteName(){
            // 無法從新渲染畫面
            // delete this.person.name
            this.$delete(this.person,'name')
        },
        changeHobby(){
            //this.person.hobby[0] = "sleep";
            this.$set(this.person.hobby,0,'sleep')
        }
    }
	
}
</script>
<style scoped>
.main{
    color:#fff; 
}

</style>
