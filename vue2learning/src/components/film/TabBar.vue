<template>
  <footer>
    <div class="tabbar">
      <!-- <router-link to="/films" active-class="mycolor" >电影 </router-link>
        <router-link to="/cinemas" active-class="mycolor">影院 </router-link>
        <router-link to="/center" active-class="mycolor">个人 </router-link>
        <br> -->

      <router-link to="/films" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" :class="isActive ? 'mycolor' : ''">电影</div>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" :class="isActive ? 'mycolor' : ''">影院</div>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <div @click="navigate" :class="isActive ? 'mycolor' : ''">个人</div>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.98rem;
  background-color: white;
  .tabbar {
    display: flex;
    line-height: 0.98rem;
    text-align: center;
    // justify-content: center;
    // width: 100%;

    margin: 0 auto;
    div {
      flex: 1;
    }
    .mycolor {
      color: red;
    }
  }
}
</style>
