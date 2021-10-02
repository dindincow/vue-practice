
<template>
    <div class="main">
        <slot :data="langue">
              
        </slot>
	</div>
</template>
<script>
export default {
    data(){
        return{  
            langue:["javescript","c++","go","jave","c#"],
        }
    },
}
</script>