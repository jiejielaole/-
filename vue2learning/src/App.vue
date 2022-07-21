<template>

  <!-- <div>hello app---{{myname}}
    <navbar myname='home' :myright="false">
      <div>111111111111111</div>
    </navbar>
    <div v-hello>11111111111111</div> -->
    <div >
        
        <tabbar></tabbar>
        <router-view></router-view>
        <!-- <div class="header">
          1111111111111111111111
        </div> -->
    </div>
  
</template>

<script>
// import navbar from './components/Navbar.vue'
// import Vue from 'vue'
import tabbar from './components/film/TabBar.vue'
import axios from 'axios'
// Vue.directive("hello",{
//   inserted(el,binding){
//     console.log(el)
//     el.style.border= '1px solid red'
//   }
// })
export default {
  components: {
    tabbar
  },
  data(){
    return {
      myname: 'jiejie'
    }
  },
  mounted() {
    // axios.get("/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E8%99%9E&ci=456&channelId=4")
    // .then(res => {
    //   console.log(res.data)
    // })
    axios.get("/jiejie/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E8%99%9E&ci=456&channelId=4")
    .then(res => {
      console.log(res.data.data.hot[0].nm)
      this.myname = res.data.data.hot[0].nm
    })
    
  }
}
</script>

<style lang="scss">



// .header {
//   width: 7.5rem;
//  height: 2rem;
//   background-color: yellow;
// }
  body {
      font-size: 16px;
    }

    * {
      margin: 0;
      padding: 0;
    }
</style>
