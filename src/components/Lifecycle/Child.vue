<template>
	<div class="main">
        <div class="box">
            子組件
        </div>
       
	</div>
</template>

<script>

export default {

    beforeCreate() {
        console.log("子組件===>beforeCreate")
    },
    created() {
        console.log("子組件===>created")
    },
    beforeMount(){
        console.log("子組件===>beforeMount")
    },
    mounted(){
        console.log("子組件===>mounted")
    },
    beforeUpdate(){
        console.log("子組件===>beforeUpdate")
    },
    updated() {
        console.log("子組件===>updated")
    },
    beforeDestroy(){
        console.log("子組件===>beforeDestroy")
    },
    destroyed(){
        console.log("子組件===>destroyed")
    },
    activated() {
        
    },
    deactivated(){

    }
	
}
</script>
<style lang="scss" scoped>
.box{
    padding: 15px;
    color: #fff;
    background:rgb(61, 57, 71);
}
</style>