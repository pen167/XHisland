// components/select_num/select_num.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    select_name:{
      type:String,
      value:"数字信息项"
    },
    start:{
      type: Number,
      value:0
    },
    end:{
      type: Number,
      value:200
    },
    defaultIndex:{
      type: Number,
      value:-1
    },
    defaultText: {
      type: String,
      value: '请选择',
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    numberArray: [],   // 存放自然数的数组
    selectedNumberIndex: -1,  // 默认选中的自然数索引
  },

  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function () {
      this.initNumberArray();
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 初始化数据
    initNumberArray() {
      const array = [];
      const start = this.data.start;
      const end = this.data.end;

      for (let i = start; i <= end; i++) {
        array.push(i.toString());  // 将自然数转换为字符串存放在数组中
      }

      this.setData({
        numberArray: array,
        selectedNumberIndex: this.data.defaultIndex,
      });
    },

    bindNumberChange(e) {
      const index = e.detail.value;
      this.setData({
        selectedNumberIndex: index,
      });
      this.triggerEvent('change', { index });
    },
  }
})