<template>
	<div class="main">
        <slot :userInfor="userInfor">子組件slot </slot> 
        <slot name="top">子組件top</slot>
		<slot>這是子組件預設文字</slot>
        <slot name="bottom"> 子組件bottom </slot>
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
