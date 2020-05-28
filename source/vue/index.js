import { initState } from './observe'
function Vue (options) {
  this._init(options)
}

Vue.prototype._init = function (options) {
  const vm = this
  vm.$options = options

  // 数据重新初始化
  // data computed watch
  initState(vm)
}

export default Vue
