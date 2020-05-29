## 认真学习 vue 源码

### Vue 主体对象

Vue 通过构造函数实现主要是为了可维护性, 假如将来 Vue 类有很多很多的原型方法, 使用构造函数实现就能通过从外界导入函数赋值给原型, 不会导致文件过大, 难以维护...

### 数据劫持

通过 `Object.defineProperty` 实现数据劫持, 对于多级对象递归实现.