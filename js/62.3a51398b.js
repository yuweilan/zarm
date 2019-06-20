(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{664:function(n,e){n.exports='# Toast 轻提示\n\n\n\n## 基本用法\n```jsx\nimport { Toast, Cell, Button, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n      test: false,\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                this.setState({\n                  visible: true,\n                })\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                Toast.show(\'指定5秒后自动关闭\', 5000, true, () => {\n                  console.log(\'Toast已关闭\');\n                });\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          指定停留时间\n        </Cell>\n\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                Toast.show(\'可同时进行其他交互\', 5000, false, () => {\n                  console.log(\'Toast已关闭\');\n                });\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          无遮罩层\n        </Cell>\n\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                Toast.show(\n                  <div className="box">\n                    <Icon className="box-icon" type="right-round-fill" />\n                    <div className="box-text">\n                      预约成功\n                    </div>\n                  </div>\n                );\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          自定义内容\n        </Cell>\n\n        <Toast\n          visible={this.state.visible}\n          afterClose={() => { this.setState({ visible: false }) }}\n          mask={false}\n          stayTime={3000}>\n          默认3秒自动关闭{this.state.test}\n        </Toast>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 加载中 Loading\n```jsx\nimport { Loading, Cell, Button, ActivityIndicator } from \'zarm\';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n      test: false,\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                this.setState({\n                  visible: true,\n                })\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Button\n              size="xs"\n              onClick={() => {\n                Loading.show(<ActivityIndicator size="lg"/>);\n                setTimeout(()=>{\n                  Loading.hide();\n                }, 3000);\n              }}\n            >\n              开启\n            </Button>\n          }\n        >\n          自定义内容\n        </Cell>\n\n        <Loading\n          visible={this.state.visible}\n          afterClose={() => { this.setState({ visible: false }); }}\n          stayTime={3000} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否显示 |\n| stayTime | number | 3000 | 自动关闭前停留的时间（单位：毫秒） |\n| onClose | () => void | - | 关闭时触发的回调函数 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n\n## 静态方法\n\n```js\n// 显示轻提示\nToast.show(children, stayTime, mask, afterClose);\nLoading.show(children, stayTime, mask, afterClose);\n```\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| children | ReactNode | - | 显示的内容 |\n| stayTime | number | 3000 | 自动关闭前停留的时间（单位：毫秒） |\n| mask | boolean | true | 是否展示遮罩层 |\n| afterClose | () => void | - | 轻提示隐藏后的回调函数 |\n\n\n```js\n// 隐藏轻提示\nToast.hide();\nLoading.hide();\n```'}}]);