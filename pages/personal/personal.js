// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareaHeight: 100,
    date: '请选择日期',
    startDate: '2000-01-01',
    endDate: '2030-12-31',
    select_gender:['--','男', '女','保密'],
    select_school:['--','本科','硕士','博士','大专','保密'],
    select_income:['--','5~10','10~20','20~30','30~100','100+','保密'],
    select_asset:['--','有车有房','有车无房','无房有车','无车无房','保密'],
    select_height:['--','170~180','未知','150+','160~170','180+'],
    select_state:['--','有对象','单身','保密']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  birthdayChange(e) {
    this.setData({
      date: e.detail.value
    });
  },

  onInput(e){
    console.log(e)
    const height = e.detail.height;
    this.setData({
      textareaHeight: height
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})