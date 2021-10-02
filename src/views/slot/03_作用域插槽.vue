<template>
	<div class="main">
		<!-- 拿子組件數據 ， 在父作用域展示-->	

		<div class="box1">
			<p>03_作用域插槽</p>
			<Child3>
                <!-- 獲取子組件中 langue 數據-->
                <templete slot-scope="mydata">
                    <span v-for="(item,index) in mydata.data" :key="index">{{item}} ~*~</span>
                </templete>
            </Child3>
		</div>
		
	</div>
</template>

<script>
import Child3 from "@/views/slot/conps/Child3";
export default {
	name: 'Slot',
    components:{
        Child3
    },
    data(){
        return{  
            
        }
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