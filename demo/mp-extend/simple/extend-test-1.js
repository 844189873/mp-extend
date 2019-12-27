// 测试 mp-extend的基本功能
function log() {
	console.log(...arguments)
}

module.exports = {
  onLoad() {
  	log('extend-test-1： 加载页面', this.__route__)
  },
  data: {
  	ex1: '我是extend-test-1混入到所有页面中的值'
  },
  ex1Func(e) {
  	log(e);
  	log('extend-test-1： ex1Func 函数被调用了，调用页面是 ', this.__route__)
  	return '这是一个来自 extend-test-1 的函数的返回值'
  }
}