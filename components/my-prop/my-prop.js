// components/my-prop/my-prop.js
Component({
  properties: {
    /* 页面向自定义组件传递内容 */
    //title: String         //第一种写法
    //第二种写法
    title:{
      type: String,
      value: "我是默认的标题",
      observer: function(newVal, oldVal){
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses: ['titleclass']
})
