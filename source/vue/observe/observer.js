import { observe } from '.'

export const defineReactive = (data, key, value) => {
  // 如果 value 依旧是一个对象的话, 需要深度递归观察
  observe(value)

  Object.defineProperty(data, key, {
    get () {
      console.log('获取数据')
      return value
    },
    set (newValue) {
      console.log('设置数据')
      if (newValue !== value) {
        value = newValue
      }
    }
  })
}
class Observer {
  // data 就是 vm._data
  constructor (data) {
    // 将用户的数据使用 Object.defineProperty 重新定义
    this.walk(data)
  }

  walk (data) {
    const keys = Object.keys(data)
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i]
      const value = data[key]
      defineReactive(data, key, value)
    }
  }
}

export default Observer
