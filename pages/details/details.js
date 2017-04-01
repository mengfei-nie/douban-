// pages/details/details.js
Page({
  data:{
    details: {}
  },
  onLoad:function(options){
    var _self = this
    // 页面初始化 options为页面跳转所带来的参数
    wx.showLoading({
      title: '加载中',
    })
    // 动态设置title
    wx.setNavigationBarTitle({
      title: options.title + "《电影《豆瓣"
    })
    // 数据请求
    console.log(options.id)
    var url = options.id
    wx.request({
      url: "https://api.douban.com/v2/movie/subject/" +　options.id,
      data: {},
      method: 'POSt', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        _self.setData({
          details: res.data
        })
          console.log(res)
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
    wx.hideLoading()
  },
  onShow:function(){
    // 页面显示    
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})