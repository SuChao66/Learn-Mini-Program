// components/my-event/my-event.js
Component({
  /**
   * 组件的方法列表
   */
  methods: {
    handleBtnClick(){
      //console.log('---------')
      this.triggerEvent("increment", {}, {})   //将事件发送出去
    }
  }
})
