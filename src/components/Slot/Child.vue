<template>
	<div class="main">
        <!-- <div><slot>這是子組件預設文字</slot></div> -->
        
        <div><slot :userInfor="userInfor">子組件slot </slot> </div>
        <div><slot name="top">子組件top</slot></div>
        <div><slot name="bottom"> 子組件bottom </slot></div> 
	</div>
</template>

<script>
export default {
	name: 'Child',
    data(){
		return{
			userInfor:{
				name:'jessica',
				age:18
			}
		}
	}
}
</script>
