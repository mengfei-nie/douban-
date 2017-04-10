// pages/canvans/canvans.js
Page({
  data:{
    animationData: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // const ctx = wx.createCanvasContext("myCanvans")
    // const grd = ctx.createLinearGradient(0,0,200,0)
    // // const grd = ctx.createCircularGradient(50, 50, 50)
    // grd.addColorStop(0,"red")
    // grd.addColorStop(1,"white")
    // ctx.setFillStyle(grd)
    // ctx.fillRect(0,0,100,100)
    // ctx.draw()
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2,2).rotate(45).step()

    this.setData({
      animationData:animation.export()
    })

    setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 1000)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})