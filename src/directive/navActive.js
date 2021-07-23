export default{
    bind(el,binding){
        console.log(binding)
       let option = binding.value;
       let {className,activeClass,currentIndex} = option;
       let childs = el.getElementsByClassName(className);
       childs[currentIndex].className = childs[currentIndex].className + ` ${activeClass}`;
    },
    update(el,binding){
        console.log("8888888888",el)
        console.log(binding.oldValue)

       let option = binding.value;
       let oldOption = binding.oldValue
       let {className,activeClass,currentIndex} = option;
       const {currentIndex:oldCurIndex} = oldOption;

       let childs = el.getElementsByClassName(className);
       childs[currentIndex].className = childs[currentIndex].className + ` ${activeClass}`;
        //   childs[oldCurIndex].className = childs[oldCurIndex].className;
        childs[oldCurIndex].className = 'tab_item';
    
    }
}