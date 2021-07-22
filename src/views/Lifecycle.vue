<template>
	<div class="main">
        父組件
		<Child/>
	</div>
</template>

<script>
import Child from '@/components/Lifecycle/Child'
export default {
	
	components: {
		Child
	},
    beforeCreate() {
        console.log("父組件===>beforeCreate")
    },
    created() {
        console.log("父組件===>created")
    },
    beforeMount(){
        console.log("父組件===>beforeMount")
    },
    mounted(){
        console.log("父組件===>mounted")
    },
    beforeUpdate(){
        console.log("父組件===>beforeUpdate")
    },
    updated() {
        console.log("父組件===>updated")
    },
    beforeDestroy(){
        console.log("父組件===>beforeDestroy")
    },
    destroyed(){
        console.log("父組件===>destroyed")
    },
    activated() {
        
    },
    deactivated(){

    }
	
}
</script>
<style lang="scss" scoped>
.main{
    padding: 15px;
    color: #fff;
    background:rgb(100, 96, 110);
}
</style>