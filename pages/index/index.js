const WXAPI = require("../../net/index")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories:[],
    goodsRecommend:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initBanners()
    this.categories()
    WXAPI.goods({
      recommendStatus: 1
    }).then(res => {
      if(res.code === 0){
        this.setData({
          goodsRecommend: res.data
        })
      }
      console.log(JSON.stringify(res))
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  async initBanners(){
    const _data = {}
    //
    const res1 = await WXAPI.banners({
      type: 'index'
    })
    if(res1.code == 700){
      wx.showModal({
        title: '提示',
        content: '请在后台添加 banner 轮播图片，自定义类型填写 index',
        showCancel: false
      })
    }else{
      _data.banners = res1.data
    }

    this.setData(_data)
  },
  async categories(){
    
    const res = await WXAPI.goodsCategory()
    let categories = [];
    if(res.code == 0){
      const _categories = res.data.filter(els =>{
        return els.level == 1
      })
      categories = categories.concat(_categories)
    }
    
    this.setData({
      categories : categories,

    })
  }
})
