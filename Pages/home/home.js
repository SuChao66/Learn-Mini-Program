// Pages/home/home.js
Page({
  data: {
    counter: 0
  },
  handleIncrement(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleclick(event){
    console.log(event)
  },
  handleIncrementCpn(){
    //最终目的：修改my-sel中的counter
    const my_sel = this.selectComponent('#sel-id')
    //console.log(my_sel)

    //组件对象.setData()修改组件中的数据(不合理)
    /* my_sel.setData({
      counter: my_sel.data.counter + 20
    }) */
    my_sel.incrementCounter(10)
  }
})