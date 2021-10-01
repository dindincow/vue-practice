<template>
<div id="app">
    <div class="container">
        <div class="nav">
            <!-- <div> 
                <router-link to="/">Home</router-link> 
            </div> -->
            <div class="nav_item"> 
                <h3><i class="iconfont">&#xe868;</i>Slot 插槽</h3>
                <router-link to="/slot">Slot</router-link> 
            </div>
        
             <div class="nav_item"> 
                <h3><i class="iconfont">&#xe682;</i>LifeCycle 生命周期</h3>
                <router-link to="/lifeCycle">LifeCycle</router-link> 
            </div>
        
             <div class="nav_item">   
                <h3><i class="iconfont" style="font-size: 15px;">&#xe63c;</i>NextTick</h3>
                <router-link to="/nextTick">NextTick</router-link> 
            </div>
        
             <div class="nav_item"> 
                <h3><i class="iconfont">&#xe60d;</i>Watch</h3>
                <router-link to="/watch">Watch</router-link> 
            </div>
             <div class="nav_item"> 
                <h3><i class="iconfont">&#xe6bb;</i>Mixin 混入</h3>
                <router-link to="/mixin">Mixin</router-link> 
            </div>
            <div class="nav_item"> 
                <h3><i class="iconfont">&#xe804;</i>Directive 指令</h3>
                <router-link to="/directive">Directive</router-link>
            </div>
              <div class="nav_item"> 
                <h3><i class="iconfont">&#xe804;</i>組件通訊</h3>
                <router-link to="/parentToChild">父子組件通訊</router-link>
                <router-link to="/sibling">兄弟組件通訊</router-link>
            </div>

        </div>
        <div class="content"> 
            <router-view/>
        </div>
           
    </div>
</div>
</template>

<style lang="scss" scoped>
#app{
    .container{
        margin: 80px auto;
        width: 1280px;
        display: flex;
    }
    .nav {
        width: 250px;
        border: 1px solid #797979;
        margin-right: 100px;
        padding: 20px 15px;
        border-radius: 10px;
        .nav_item{
            padding: 15px 20px;
            border-bottom: 1px solid #464149;
            display: flex;
            flex-direction:column ;
            h3{
               color: #ffffff;
               margin-bottom: 10px;   
               font-weight: 500;
            }
            a{
                color: #c8b3d5;
                padding-left: 36px;
                &.router-link-exact-active {
                    color: #42b983;
                }
            }
            &:last-child{
                border-bottom: none;
            }
        }

       
    }
    .content{
        flex:1
    }
}


</style>
