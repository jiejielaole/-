<template>
  <div>
    {{ $store.state.name }}
    {{nnnn[0].a}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      name1: "lala",
    };
  },
  computed: {
    ...mapState(['nnnn','name'])
  },
  mounted() {
    // this.$store.dispatch("getname", this.name1).then(res => {
    //   console.log(res);
    //   console.log("完事了");
      console.log(this.name)
    // });
  },
  
};
</script>
