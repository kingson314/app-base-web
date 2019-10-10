// import React from 'react'
// import WangEditor from 'wangeditor'
// class Editor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorHtml: '',
//       editorText: '',
//       menus: []
//     };
//   }

//   componentDidMount() {
//     let that = this
//     const elem = this.refs.editorElem
//     const editor = new WangEditor(elem)
//     //监听内容输入
//     editor.customConfig.onchange = (html) => {
//       this.setState({
//         editorHtml: html,
//         editorText: editor.txt.text()
//       })
//       this.props.setContent(this.props.id, html);
//     }
//     //监听上传
//     editor.customConfig.customUploadImg = function (files, insert) {
//       console.log(files)
//       that.props.setContent('imgUrl', files[0].name);
//       //附件上传服务
//       // api.uploadFiles(files[0]).then((res) => {
//       //   if (res.code == 200) {
//       //   } else {
//       //   }
//       // })
//     }
//     //配置项
//     editor.customConfig.menus = [
//       'head', // 标题
//       'bold', // 粗体
//       'fontSize', // 字号
//       'fontName', // 字体
//       'italic', // 斜体
//       'underline', // 下划线
//       'strikeThrough', // 删除线
//       'foreColor', // 文字颜色
//       'link', // 插入链接
//       'list', // 列表
//       'justify', // 对齐方式
//       'emoticon', // 表情
//       'image', // 插入图片
//       'video', // 插入视频
//       'undo', // 撤销
//       'redo' // 重复
//     ]
//     editor.customConfig.uploadImgShowBase64 = true
//     editor.customConfig.zIndex = 10
//     editor.create()
//     window.editor = editor

//     //回显
//     if (this.props.dataFromRes) {
//       editor.txt.html(this.props.dataFromRes)
//     }
//   }

//   render() {
//     return (
//       <div ref="editorElem" style={{ textAlign: 'left', width: "100%", margin: '10px auto' }}>
//       </div>
//     );
//   }
// }
// export default Editor;