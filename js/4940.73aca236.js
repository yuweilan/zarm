(self.webpackChunksite=self.webpackChunksite||[]).push([[4940],{14940:function(n,e,s){"use strict";s.r(e),e.default="# Message 消息\n\n## 基本用法\n\n```jsx\nimport { Message, Icon } from 'zarm';\n\nReactDOM.render(\n  <>\n    <Message>普通</Message>\n    <Message theme=\"danger\">自定义主题</Message>\n    <Message theme=\"warning\" icon={<Icon type=\"warning-round\" />}>\n      自定义图标\n    </Message>\n  </>,\n  mountNode,\n);\n```\n\n## 可操作\n\n```jsx\nimport { Message } from 'zarm';\n\nReactDOM.render(\n  <>\n    <Message hasArrow onClick={() => alert('click this message!')}>\n      链接样式\n    </Message>\n    <Message closable>可关闭</Message>\n  </>,\n  mountNode,\n);\n```\n\n## API\n\n| 属性     | 类型       | 默认值    | 说明                                                              |\n| :------- | :--------- | :-------- | :---------------------------------------------------------------- |\n| theme    | string     | 'primary' | 主题，可选值 `default`、`primary`、`success`、`warning`、`danger` |\n| size     | string     | 'md'      | 设置大小，可选值为 `md`、`lg`                                     |\n| icon     | ReactNode  | -         | 设置图标                                                          |\n| closable | boolean    | false     | 是否显示关闭按钮                                                  |\n| hasArrow | boolean    | false     | 是否显示箭头                                                      |\n| onClick  | () => void | -         | 点击后触发的回调函数                                              |\n"}}]);