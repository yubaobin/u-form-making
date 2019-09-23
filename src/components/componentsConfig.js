export const basicComponents = [
  {
    type: 'text',
    name: '单行文本',
    icon: 'icon-input',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      readonly: false,
      dataType: '',
      pattern: '',
      placeholder: '',
      disabled: false,
      operationAtt: [],
      cssName: 'form-input'
    }
  },
  {
    type: 'password',
    name: '密码框',
    icon: 'icon-input',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      dataType: '',
      pattern: '',
      placeholder: '',
      disabled: false,
      cssName: 'form-password'
    }
  },
  {
    type: 'textarea',
    name: '多行文本',
    icon: 'icon-diy-com-textarea',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      disabled: false,
      placeholder: '',
      cssName: 'form-textarea'
    }
  },
  {
    type: 'number',
    name: '计数器',
    icon: 'icon-number',
    hidden: true,
    options: {
      width: '',
      required: false,
      defaultValue: 0,
      min: '',
      max: '',
      step: 1,
      disabled: false,
      controlsPosition: '',
      cssName: 'form-number'
    }
  },
  {
    type: 'radio',
    name: '单选框组',
    icon: 'icon-radio-active',
    options: {
      defaultValue: '',
      options: [
        {
          value: '选项1',
          label: '选项1'
        },
        {
          value: '选项2',
          label: '选项2'
        },
        {
          value: '选项3',
          label: '选项3'
        }
      ],
      required: false,
      width: '',
      remote: 3,
      remoteOptions: [],
      dictField: '',
      props: {
        value: 'value',
        label: 'text'
      },
      remoteFunc: '',
      disabled: false,
      cssName: 'form-radio'
    }
  },
  {
    type: 'checkbox',
    name: '多选框组',
    icon: 'icon-check-box',
    options: {
      defaultValue: [],
      options: [
        {
          value: '选项1'
        },
        {
          value: '选项2'
        },
        {
          value: '选项3'
        }
      ],
      required: false,
      width: '',
      remote: 3,
      remoteOptions: [],
      dictField: '',
      props: {
        value: 'value',
        label: 'text'
      },
      remoteFunc: '',
      disabled: false,
      cssName: 'form-checkbox'
    }
  },
  {
    type: 'time',
    name: '时间选择器',
    icon: 'icon-time',
    hidden: true,
    options: {
      defaultValue: '21:19:56',
      readonly: false,
      disabled: false,
      operationAtt: [],
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: true,
      format: 'HH:mm:ss',
      required: false,
      width: '',
      cssName: 'form-time'
    }
  },
  {
    type: 'date',
    name: '日期选择器',
    icon: 'icon-date',
    options: {
      defaultValue: '',
      readonly: false,
      disabled: false,
      operationAtt: [],
      placeholder: '',
      type: 'date',
      format: 'yyyy-MM-dd',
      required: false,
      width: '',
    }
  },
  {
    type: 'date',
    name: '时间选择器',
    icon: 'icon-date',
    options: {
      defaultValue: '',
      readonly: false,
      disabled: false,
      operationAtt: [],
      placeholder: '',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',
      required: false,
      width: '',
      cssName: 'form-date'
    }
  },
  {
    type: 'rate',
    name: '评分',
    icon: 'icon-icon-test',
    hidden: true,
    options: {
      defaultValue: null,
      max: 5,
      disabled: false,
      allowHalf: false,
      required: false,
      cssName: 'form-rate'
    }
  },
  {
    type: 'color',
    name: '颜色选择器',
    icon: 'icon-color',
    hidden: true,
    options: {
      defaultValue: '',
      disabled: false,
      showAlpha: false,
      required: false,
      cssName: 'form-color'
    }
  },
  {
    type: 'list',
    name: '下拉选择框',
    icon: 'icon-select',
    options: {
      defaultValue: '',
      multiple: false,
      disabled: false,
      placeholder: '',
      required: false,
      showLabel: false,
      width: '',
      options: [
        {
          value: '下拉框1'
        },
        {
          value: '下拉框2'
        },{
          value: '下拉框3'
        }
      ],
      dictField: '',
      remote: 3,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'text'
      },
      remoteFunc: '',
      cssName: 'form-select'
    }
  },
  {
    type: 'switch',
    name: '开关',
    icon: 'icon-switch',
    hidden: true,
    options: {
      defaultValue: false,
      required: false,
      disabled: false,
      cssName: 'form-switch'
    }
  },
  {
    type: 'slider',
    name: '滑块',
    icon: 'icon-slider',
    hidden: true,
    options: {
      defaultValue: 0,
      disabled: false,
      required: false,
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      range: false,
      width: '',
      cssName: 'form-slider'
    }
  }
]

export const advanceComponents = [
  {
    type: 'blank',
    name: '自定义',
    icon: 'icon-ic',
    hidden: true,
    options: {
      defaultType: 'String'
    }
  },
  {
    type: 'image',
    name: '图片',
    icon: 'icon-tupian',
    options: {
      defaultValue: [],
      size: {
        width: 100,
        height: 100,
      },
      width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
      disabled: false,
      length: 8,
      multiple: false,
      isQiniu: false,
      isDelete: false,
      min: 0,
      isEdit: false,
      action: 'https://jsonplaceholder.typicode.com/photos/',
      cssName: 'form-tupian'
    }
  },
  {
    type: 'file',
    name: '文件',
    icon: 'icon-shangchuan',
    options: {
      defaultValue: [],
      size: {
        width: 100,
        height: 100,
      },
      width: '',
      disabled: false,
      length: 8,
      action: 'https://jsonplaceholder.typicode.com/photos/',
      multiple: false,
      cssName: 'form-file'
    }
  },
  {
    type: 'umeditor',
    name: '编辑器',
    icon: 'icon-fuwenbenkuang',
    options: {
      disabled: false,
      defaultValue: '',
      width: '',
      cssName: 'form-ueditor'
    }
  },
  {
    type: 'cascader',
    name: '级联选择器',
    icon: 'icon-jilianxuanze',
    hidden: true,
    options: {
      defaultValue: [],
      width: '',
      placeholder: '',
      disabled: false,
      remote: true,
      remoteOptions: [],
      props: {
        value: 'value',
        label: 'text',
        children: 'children'
      },
      remoteFunc: '',
      cssName: 'form-cascader'
    }
  }
]

export const layoutComponents = [
  {
    type: 'grid',
    name: '栅格布局',
    icon: 'icon-grid-',
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      gutter: 0,
      justify: 'start',
      align: 'top'
    }
  }
]
