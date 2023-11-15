Component({

  /**
   * 组件的属性列表
   */
  properties: {
    select_array: {
      type: Array,
      value: []
    },
    defaultIndex: {
      type: Number,
      value: 0
    },
    defaultText: {
      type: String,
      value: "请选择"
    },
    select_name: {
      type: String,
      value: "文本信息项",
    },


    
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedValue: 0, // 默认选中的值
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
    initNumberArray() {
      // 初始化时删除"请选择"这个选项
      const selectedIndex = this.data.selectedValue;
      this.setData({
        select_array: this.properties.select_array.filter((_, index) => index !== selectedIndex),
      });
    },

    onPickerChange(e) {
      console.log(e);
      const index = e.detail.value;
      this.setData({
        selectedValue: index
      });

      // 在这里可以处理选中项变化后的逻辑
      console.log('Selected value:', this.data.select_array[this.data.selectedValue]);
    }
  }
})

// // components/select_box/select_box.js
// Component({

//   /**
//    * 组件的属性列表
//    */
//   properties: {
//     select_name:{
//       type:String,
//       value:"文本信息项"
//     },
//     select_array:{
//       type:Array,
//       value:[]
//     },
//     defaultIndex:{
//       type: Number,
//       value:-1
//     },
//     defaultText: {
//       type: String,
//       value: '请选择',
//     }
//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {
//     selectArray: [], // 下拉框选项
//     selectedValue: -1 // 默认选中的值
//   },

//   lifetimes: {
//     // 在组件实例进入页面节点树时执行
//     attached: function () {
//       this.initNumberArray();
//     },
//   },

//   /**
//    * 组件的方法列表
//    */
//   methods: {
//     initNumberArray() {
//       // 初始化时删除"请选择"这个选项
//       const selectedIndex = this.data.selectedValue;
//       this.setData({
//         select_array: this.properties.select_array.filter((_, index) => index !== selectedIndex),
//       });
//     },

//     onPickerChange(e) {
//       console.log(e)
//       const index = e.detail.value;
//       this.setData({
//         selectedValue: index
//       })
      

//       // 在这里可以处理选中项变化后的逻辑
//       // console.log('test_selected value:', this.properties.select_array[this.data.selectedValue])
//       console.log('Selected value:', this.data.selectArray[this.data.selectedValue]);
//     }
//       // this.triggerEvent('change', { index });
//     }
//   }
// })