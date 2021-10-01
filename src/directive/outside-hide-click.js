export const outsideHideClick =  {

    bind(el,binding,vnode){
       
        // console.log('binding',binding)
        document.addEventListener('click', (e)=>{
            let dom = document.querySelector('.dropDown');
            /** 
             * 綁定元素 = 點擊元素，顯示下拉選單
             * 綁定元素 包含點擊的元素，顯示下拉選單
            */ 

            if(el.contains(e.target)){
                console.log(binding.value)
                if(dom.style.display === 'none'){
                    dom.style.display = 'block';
                }else{
                    dom.style.display = 'none';
                }
               
            }else{
                if(dom){
                    dom.style.display = 'none';
                }
               
            }

            // if( !(el === e.target || el.contains(e.target))){
            //     console.log("none")
            //     dom.style.display = 'none';
            //     return;
            // }
            // binding.value(e);
            // else{
            //     // 不符合以上2種狀況隱藏選單，因為點到外面的不相干 DIV
            //     console.log("show")
            //     dom.style.display = 'block';
            
            // }
        });  
       
    },
    update(el,binding){
        console.log("update",el,binding)
    },
    unbind (el) {
        console.log("unbind")
        document.body.removeEventListener('click', el.event)
    }



}