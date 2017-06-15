# React-- count down
翻牌倒计时

[原项目地址](https://github.com/jeka1985/flip-timer)


倒计时插件功能分析

1 components

index.js

引入Countdown组件 传入参数stop 用来表示从当前到什么时候的倒计时

在原基础组间上使用了moment 这样每次刷新页面 都计算的明天此时到现在的倒计时

2 主组件Coundown

scheme.js中属性 defaults 表示的是倒计时结束时间

idnex.js

原基础组件上添加了一行代码

```javascript

getDiffObject() {
  var future = this.props.stop.getTime()
  if (future - (new Date()).getTime() < 0) {
    future = 24 * 60 * 60 * 1000 + future
  }
  var ms = Math.abs(future - (new Date()).getTime())
--other code--

```
因为在倒计时结束时候 如果不刷新页面  倒计时将会从0开始加  

添加此代码  可以在不刷新页面的情况下 重新开始倒计时
