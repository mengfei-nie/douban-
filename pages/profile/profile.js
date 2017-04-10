// pages/profile/profile.js
var app = getApp()
Page({
  data:{
    image_src: ""
  },
  onLoad:function(options){
    console.log('load')
    var _self = this
    app.getUserInfo(function(e){
      _self.setData({
        image_src: e.avatarUrl
      })
    })
    // 页面初始化 options为页面跳转所带来的参数
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {
        // complete
      }
    })
    // wx.getLocation({
    //   type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    //   success: function(res){
    //     console.log(res)
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     wx.chooseLocation({
    //       success: function(res){
    //         console.log(res)
    //       },
    //       fail: function(res) {
    //         // fail
    //       },
    //       complete: function(res) {
    //         // complete
    //       }
    //     })
    //   },
    //   fail: function(res) {
    //     // fail
    //   },
    //   complete: function(res) {
    //     // complete
    //   }
    // })
  },
  onReady:function(){
    this.mapCtx = wx.createMapContext('myMap')
    console.log("ready")
    // 页面渲染完成
    // var timer = new Date()
    // wx.setStorage({
    //   key: 'time',
    //   data: timer,
    //   success: function(res){
    //     // success
    //     console.log("异步存储")
    //   },
    //   fail: function(res) {
    //     // fail
    //   },
    //   complete: function(res) {
    //     // complete
    //   }
    // })
    // wx.setStorageSync('time1', timer)
  },
  onShow:function(){
    // 页面显示
    // wx.getStorage({
    //   key: "time",
    //   success: function(res) {
    //     console.log(res)
    //     console.log("获取信息")
    //   }
    // })
     wx.getNetworkType({
      success: function(res) {
        console.log(res)
      }
    })
    wx.onNetworkStatusChange(function(res) {
      console.log(res.isConnected)
      console.log(res.networkType)
    })
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
      }
    })
  },
  onHide:function(){
    // 页面隐藏
   
  },
  onUnload:function(){
    // 页面关闭
  },
  tap: function () {
    var _self = this
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        var avatar = res.tempFilePaths[0]
        wx.saveFile({
          tempFilePath: avatar,
          success: function(res){
            _self.setData({
              image_src: res.savedFilePath
            })
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })
        console.log(res)
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  scanTap: function () {
    wx.scanCode({
      success: function(res){
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
  makePhone: function () {
    console.log(11111111)
    wx.makePhoneCall({
      phoneNumber: '13237152485',
      success: function(res) {
        console.log(res)
        // success
      }
    })
  },
  showAction: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  showModal: function () {
    wx.showModal({
      title: "提示",
      content: "是否确认",
      showCancel: false,
      success:function(res){
        console.log(res)
        if (res.confirm) {
          console.log(res.confirm)
        } else {
          console.log(res.confirm)
        }
      }
    })
  },
  showLoading: function () {
    wx.showLoading({

    })
    setTimeout(function(){
      wx.hideLoading()
    },1000)
  }
})