import Observer from './observer'

export function observe (data) {
  // 非对象或者 null 不需要监听直接返回
  if (typeof data !== 'object' || data === null) {
    return
  }
  return new Observer(data)
}
function initData (vm) {
  const data = vm.$options.data
  vm._data = typeof data === 'function' ? data.call(vm) : data || {}

  observe(vm._data)
}
function initComputed () {

}
function initWatch () {

}
export function initState (vm) {
  const opts = vm.$options
  if (opts.data) {
    initData(vm)
  }

  if (opts.computed) {
    initComputed()
  }

  if (opts.watch) {
    initWatch()
  }
  console.log('init State')
}
