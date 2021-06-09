// getApp()获取App()产生的示例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

// 注册一个页面
// 页面也有自己的生命周期
Page({
  // --------------2.初始化数据------------------
  data: {
    name: "Coderwhy",
    age:18,
    students:[
      {id:110, name:'kobi', age:30},
      {id:110, name:'kobi', age:10},
      {id:110, name:'kobi', age:20},
      {id:110, name:'kobi', age:40}
    ],
    counter:0
  },
  handleBtnClick(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  handleSubtraction(){
    this.setData({
        counter:this.data.counter + 1
    })
  },


  // -------------1.监听页面的生命周期函数-----------------
  // 监听页面加载
  onLoad(){
    console.log('onLoad监听页面加载')
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/home/multidata',
      success:(res) => {
        console.log(res)
      }
    })
  },
  // 监听页面初次渲染完成
  onReady(){
    console.log('onReady监听页面初次渲染完成')
  },
  // 监听页面显示
  onShow(){
    console.log('onShow监听页面显示')
  },
  // 监听页面隐藏
  onHide(){
    console.log('onHide监听页面隐藏')
  },
  // 监听页面卸载
  onUnLoad(){
    console.log('onUnLoad监听页面卸载')
  },

  // -------------3.监听wxml中相关的一些事件--------------------
  // 用获取户信息方式一
  hanleGetUserInfo(event){
    console.log(event)
  },

  // -------------4.其他事件-------------------
  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  // 下拉刷新
  onPullDownRefresh(){
    console.log('我刷新了')
  }
})