// Pages/input/input.js
Page({
  data: {

  },

  handleinput(event){
    console.log("用户输入内容：", event)
  },

  handlefocus(event) {
    console.log("input获取焦点：", event)
  },

  handleblur(event) {
    console.log("input失去焦点：", event)
  }

})