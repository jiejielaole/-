<template>
  <div>
    <button @click="handlelist">left</button>
    {{myname}}
    <button v-show="myright">right</button>
    <slot></slot>
    <ul v-for="data in list" :key='data.id'>
      <li>{{data.name}}</li>

    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['myname', 'myright'],
  data () {
    return {
      list: []
    }
  },
  methods: {
    handlelist () {
      axios.get('/shop.json').then(res => {
        this.list = res.data.list
      })
    }
  }
}
</script>
