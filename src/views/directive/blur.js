export default{
    // 指令被調用有2個時機:
    // 1. 初次綁定時
    // 2. 用到指令的模版從解析時
    bind(el,binding){
        //el.focus();
    },
    inserted(el,binding){
        console.log("111")
        el.focus();
    },
    update(){

    }
}