Page({

  /**
   * 页面的初始数据
   */
  data: {
    certificateArray: ['结婚证','要领证', '不领证', '可商量'],
    certificateIndex: 0,
    childArray: ['小孩','要小孩', '不要孩', '可商量'],
    childIndex: 0,
    liveArray: ['居住','要同住', '不同住', '可商量'],
    liveIndex: 0,
    genderArray: ['不限','男生', '女生'],
    genderIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  bindCertificateChange: function (e) {
    console.log('picker发送选择改变，结婚证携带值为', e.detail.value)
    this.setData({
      // certificateIndex: e.detail.value
      certificateIndex: e.detail.value
    })
  },

  bindChildChange: function (e) {
    console.log('picker发送选择改变，小孩携带值为', e.detail.value)
    this.setData({
      childIndex: e.detail.value
    })
  },

  bindLiveChange: function (e) {
    console.log('picker发送选择改变，是否同住携带值为', e.detail.value)
    this.setData({
      liveIndex: e.detail.value
    })
  },

  bindGenderChange: function (e) {
    console.log('picker发送选择改变，性别携带值为', e.detail.value)
    this.setData({
      genderIndex: e.detail.value
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
    
  }
})