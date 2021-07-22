export const outsideHideClick =  {

    bind(el,binding,vnode){
       
        console.log('binding',binding)
        // document.addEventListener('click', (e)=>{
        //     let dom = document.querySelector('.dropDown');
        //     /** 
        //      * 綁定元素 = 點擊元素，顯示下拉選單
        //      * 綁定元素 包含點擊的元素，顯示下拉選單
        //     */ 
        //     if(dom){
        //         if( !(el === e.target || el.contains(e.target))){
        //             dom.style.display = 'none';
        //         }
        //         else{
        //             // 不符合以上2種狀況隱藏選單，因為點到外面的不相干 DIV
        //             dom.style.display = 'block';
                
        //         }
        //     }
            
 
        // });
       

    
        function clickHandler(e) {
            // 这里判断点击的元素是否是本身，是本身，则返回
            if (el.contains(e.target)) {
                return false;
            }
            // 判断指令中是否绑定了函数
            if (binding.expression) {
                // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                binding.value(e);
            }
        }
        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = clickHandler;
        
        document.body.addEventListener('click', clickHandler)
    
         
       
    },
    update(){
        console.log("update")
    },
    unbind (el) {
        console.log("unbind")
        document.body.removeEventListener('click', el.event)
    }



}