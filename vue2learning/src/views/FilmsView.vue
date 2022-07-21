<template>
  <div class="films">
    <film-swiper name="jiejie">
      <!-- <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    <div class="swiper-slide">Slide 4</div> -->
    <!-- <div><img class="swiper-slide" src="https://s2.loli.net/2022/05/27/uIKBkythSUMPiED.jpg" alt=""></div>
       <div> <img class="swiper-slide" src="https://s2.loli.net/2022/05/27/bgh1tQ3xI8ZMTu9.jpg" alt=""></div>
       <div><img class="swiper-slide" src="https://s2.loli.net/2022/05/27/XiMNC9sSlurcT3t.jpg" alt=""></div> -->
        <img class="swiper-slide" src="https://s2.loli.net/2022/05/27/uIKBkythSUMPiED.jpg" alt="">
       <img class="swiper-slide" src="https://s2.loli.net/2022/05/27/bgh1tQ3xI8ZMTu9.jpg" alt="">
       <img class="swiper-slide" src="https://s2.loli.net/2022/05/27/XiMNC9sSlurcT3t.jpg" alt="">
    </film-swiper>
    <div>
      二级导航声明
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import filmSwiper from '../components/film/FilmSwiper.vue'
export default {
  components:{
    filmSwiper
  }
}
</script>