<template>
	<div class="main">
		<!--
			Slot插槽: 父祖件想往子組件安插東西。
			一般來說，父祖件在引入子組件時，通常 <SlotA></SlotA> 寫就結束了。但是我在子組件標籤內部加點內容，像是這樣
			<SlotA>哈囉!你好</SlotA>，該怎麼做呢?這就是用到Slot插槽時後了!
		-->	

		<div class="box1">
			<p>BOX1</p>
			<Child1> 父組件 哈哈哈 </Child1>
		</div>
		
	</div>
</template>

<script>
import Child1 from "@/views/slot/conps/Child1";
export default {
	name: 'Slot',
	components: {
		Child1
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