<template>
  <div class="swiper jiejie">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <!-- <div class="swiper-slide"> -->
      <slot></slot>
    <!-- </div> -->
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <!-- <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div> -->

  <!-- If we need scrollbar -->
  <!-- <div class="swiper-scrollbar"></div> -->
</div>
</template>

<script>
 import Swiper from 'swiper/bundle';
 import 'swiper/css/bundle';
//  import 'swiper/css';
  // import 'swiper/swiper-bundle.min.css';
  //   import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // // Import Swiper Vue.js components
  // import { Swiper, SwiperSlide } from 'swiper/vue';

  // // Import Swiper styles
  // import 'swiper/css';
  // import 'swiper/css/navigation';
  // import 'swiper/css/pagination';
  // import 'swiper/css/scrollbar';
export default {
  // components: {
  //     Swiper,
  //     SwiperSlide,
  //   },
  props:{
    name:''
  },
  mounted () {
     new Swiper('.'+this.name,{
      loop: true,
      slidesPerView: 1.5,
      spaceBetween:30,
      freeMode:true,
      autoplay:{
        delay:2500,
        disableOnInteraction: false,
      },
       pagination: {
    el: '.swiper-pagination',
  },
  })
  }
 
}
</script>

<style lang="scss" scoped>
.jiejie{
  width: 7.5rem;
  height: 3.5rem;
}
</style>