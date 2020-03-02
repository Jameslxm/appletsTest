const app = getApp()

Page({
  touchstart: function(e){
    console.info(e);
  },
  canvasIdErrorCallback:function(e){
    console.error(e.detail.errMsg)
  },
  onReady(){
    const query = wx.createSelectorQuery()
    // query.select('#myCanvas')
    // .fields({node:true,size:true})
    // .exec((res) =>{
    //   const canvas = res[0].node
    //   const ctx = canvas.getContext('2d')
    //   const dpr = wx.getSystemInfoSync().pixelRatio
    //   canvas.width = res[0].width * dpr
    //   canvas.height = res[0].height * dpr
    //   ctx.scale(dpr,dpr)
    //   ctx.fillRect(0,0,100,100)
    // })

    // query.select('#myCanvas2').node().exec((res) =>{
    //   const canvas = res[0].node
    //   const gl = canvas.getContext('webgl')
    //   gl.clearColor(1,0,1,1)
    //   gl.clear(gl.COLOR_BUFFER_BIT)
    // })


    var context = wx.createCanvasContext('firstCanvas')
    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0,0,200,200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160,100)
    context.arc(100,100,60,0,2*Math.PI,true)
    context.moveTo(140,100)
    context.arc(100,100,40,0,Math.PI,false)
    context.moveTo(85,80)
    context.arc(80,80,5,0,2*Math.PI,true)
    context.moveTo(125,80)
    context.arc(120,80,5,0,2*Math.PI,true)
    context.stroke()
    context.draw()
  },
  data: {

  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
