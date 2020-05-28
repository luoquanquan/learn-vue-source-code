import Vue from 'vue'

// eslint-disable-next-line
const vm = new Vue({
  el: '#app',
  data () {
    return {
      msg: 'hello',
      info: {
        name: 'quanquan',
        age: 18
      },
      like: [1, 2, 3]
    }
  },
  computed: {

  },
  watch: {

  }
})

console.log(vm._data.msg)
vm._data.msg = 'quanquan'
