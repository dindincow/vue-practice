<template>
	<div class="main">
		<div class="box1">
            <Child2>
                <template v-slot:top>
                    <p>您确定要退出本系统?</p>
                </template>
               
                <p slot="mid">父組件 mid </p>
                <p slot="bottom">父組件 bottom </p>
            </Child2>
		</div>
	</div>
</template>

<script>
import Child2 from "@/views/slot/conps/Child2";
export default {
	name: 'Slot',
	components: {
		Child2
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