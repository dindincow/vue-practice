<template>
	<div class="main">
        <h3>使用 Event bus : 兄弟組件通訊</h3>
        <Input/>
        <List/>
	</div>
</template>
<script>
import Input from "@/components/communication/Input"
import List from "@/components/communication/List"
export default {
    components:{
        Input,
        List
    },
}
</script>
<style lang="scss" scoped>
h3{
    margin-bottom: 15px;
    color: rgb(19, 138, 243);
}
</style>