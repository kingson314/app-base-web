// import React from 'react'
// import {
//     Form, Row, Col,Icon, Button,
// } from 'antd';

// import * as UtilCom from '@/utils/UtilCom'

// export default  class FormView extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {
//         mode:'view'
//     };
//     init(){
//         let items=this.props.items;
//         const rows = [];
//         let maxColCount = items[0].length; // 潜规则1：以首行配置的列数为最大列数(包含hidden类型以及空对象)
//         for (let rowIndex = 0; rowIndex < items.length; rowIndex++) {
//             let rowItems = items[rowIndex];
//             let cols=[];
//             let rowStyle={};
//             for (let colIndex = 0; colIndex < rowItems.length; colIndex++) {
//                 let item=rowItems[colIndex];
//                 if(!item.id)continue;
//                 let clsArr=UtilCom.getCls(maxColCount,item.colspan);
//                 if(item.type.toLowerCase()=="hidden")continue;
//                 if(item.label)cols.push(<Col key={item.id+"_label"}  className="ant-form-item-label" {...clsArr[0]}>{item.label}</Col>);
//                 cols.push( <Col key={item.id} className="ant-form-item-view" {...clsArr[1]}> {this.props.formValues[item.id]} </Col>)
//             }
//             rows.push(<Row style={{...rowStyle}} gutter={{xs:24, sm: 24, md: 24,lg:24,xl:24,xxl:24}} key={rowIndex}>
//                {cols}
//             </Row>);
//         }
//         return rows;
//     }

//     render() {
//         return (
//             <div className="form-view">
//                 <Row gutter={{xs:24, sm: 24, md: 24,lg:24,xl:24,xxl:24}} key={-1}>
//                     <Col  xs={{span:16}} className="title" ><Icon type="setting" theme="filled" />{this.props.title} - {this.props.mode}</Col>
//                     <Col  xs={{span:8}} className="title-btn" ><Button type="primary" onClick={this.props.onEdit}><Icon type="edit" />编辑</Button></Col>
//                 </Row>
//                 <Form {...this.props.formCfg}
//                     className="ant-advanced-search-form"
//                 >
//                     {this.init()}
//                     <Row gutter={{xs:24, sm: 24, md: 24,lg:24,xl:24,xxl:24}} key={-2}>
//                         <Col className="toolbar">
//                             <Button onClick={this.props.onCancel}><span className="iconfont icon-return"></span>返回</Button>
//                         </Col>
//                     </Row>
//                 </Form>
//             </div>
//         );
//     }
// }