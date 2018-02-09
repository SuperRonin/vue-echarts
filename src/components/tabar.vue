<template>
  <div class="tabbar">
      <ul class="tabbar-list">
        <li>
            <router-link :to="{ path: '/', activeClass: 'red'}"  replace exact><img src="../assets/icon_home_sel.png" alt=""><p>首页</p></router-link>
        </li>
        <li>
            <router-link :to="{ path: '/sec', activeClass: 'red'}"  replace exact><img src="../assets/icon_home_sel.png" alt=""><p>用户分析</p></router-link>   
        </li>
        <li>
            <router-link :to="{ path: '/third', activeClass: 'red'}"  replace exact><img src="../assets/icon_home_sel.png" alt=""><p>对比分析</p></router-link>
        </li>
        <li>
            <router-link :to="{ path: '/fouth', activeClass: 'red'}"  replace exact><img src="../assets/icon_home_sel.png" alt=""><p>综合分析</p></router-link>
        </li>
      </ul>
  </div>
</template>

<style lang="scss" scoped>
.tabbar-list li a.router-link-active p,
.tabbar-list li a.router-link-exact-active p{
    color: red!important;
 }
.red{
    p{
        color: red!important;
    }
}
.tabbar-list {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;

    li{
        padding: 5px 0;
        a{
            width: 100%;
            height: 100%;
        }
        p{
            color: #999;
        }

        img{
            width: 20px;
            height: 20px;
            padding-bottom: 5px;
        }
    }
}
</style>

