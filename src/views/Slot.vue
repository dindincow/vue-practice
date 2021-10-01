<template>
	<div class="main">
		<!--
			Slot插槽: 父祖件想往子組件安插東西。
			一般來說，父祖件在引入子組件時，通常 <SlotA></SlotA> 寫就結束了。但是我在子組件標籤內部加點內容，像是這樣
			<SlotA>哈囉!你好</SlotA>，該怎麼做呢?這就是用到Slot插槽時後了!

		-->	
		<!---- 基本使用 ---->
		<div class="box1">
			<p>BOX1</p>
			<Child> 45465</Child>
		</div>
		<!---- 具名插槽 ---->
		<!-- 必須在 子組件中使用 templete -->
		<div class="box2">
			<p>BOX2</p>
			<Child>
				<template v-slot:top><p class="text">我是父組件 TOP</p></template>
				<template v-slot:default><p class="text">我是父組件 預設值</p></template>
				<template v-slot:bottom><p class="text">我是父組件 Bottom</p></template>
			</Child>
		</div>

		<!----作用域插槽 ---->
		<div class="box3">
			<p>BOX3</p>
			<Child>	
				<template v-slot:default="myInfo">
					我是父組件box3
					{{myInfo.userInfor}}
				</template>
			</Child>
		</div>
		
	</div>
</template>

<script>
import Child from "@/components/Slot/Child";
export default {
	name: 'Slot',
	components: {
		Child
	},
	
}
</script>
<style lang="scss" scoped>
.box1,.box2,.box3{
    padding: 10px 20px 0 20px;
	margin: 0 auto;
	width: 300px;
	height: 200px;
	// border: 5px solid #ccc;
	margin-bottom: 20px;
	background: rgb(47, 45, 54);
    border-radius: 20px ;
    font-size: 20px;
    color: #fff;
    p{
        color: rgb(109, 107, 116);
    }
    .text{
        color: #fff;
    }
}

</style>