// import React from 'react'
// import { Modal, Form, Row, Col,Button,Table,Icon,message } from 'antd';
// import FormEdit from  './FormEdit'
// import FormView from  './FormView'
// import Toolbar from  './Toolbar'

// import * as api from '@/api/index'

// const FormEditEl = Form.create({name:"grid-eidt"})(FormEdit);
// const FormViewEl = Form.create({name:"grid-view"})(FormView);
// export default  class Grid extends React.Component {
//     state = {
//         data: [],
//         pagination: {},
//         loading: false,
//         selected:[],//Table checked
//         //显藏控制
//         showView:"none",
//         showEdit:"none",
//         showGrid:"",
//         //
//         mode:'新增',
//         formValues:{}
//     };
//     constructor(props) {
//         super(props);
//         // console.log(this.props.tableCfg);
//     }
//     componentDidMount() {
//         this.onLoad(this.props.params||{});
//     }
//     /*** Table ***/
//     async onLoad(params){
//         this.setState({ loading: true });
//         const rs = await  api.post(this.props.url+"list",params);
//         const pagination = {
//             showSizeChanger: true,
//             showQuickJumper: true,
//            total:rs.total,
//             showTotal:(total)=>{return `总记录 ${total} `},
//         };
//         this.setState({
//             loading: false,
//             data: rs.data,
//             pagination,
//         });
//     }
//     onChange = (pagination, filters, sorter) => {
//         // const pagerParams = { ...this.state.pagination };
//         // pagerParams.current = pagination.current;
//         // this.setState({
//         //     pagination: pagerParams,
//         // });
//         // this.onLoad({
//         //     pageSize: pagination.pageSize,
//         //     pageIndex: pagination.current,
//         //     sortField: sorter.field,
//         //     sortOrder: sorter.order,
//         //     ...filters,
//         // });
//     }
//     onAdd= () => {
//         this.setState({
//             showView:"none",
//             showEdit:"block",
//             showGrid:"none",
//             mode:'新增'
//         });
//         this.formEditEl.resetFields();
//         return true;
//     }
//     onView= (id,record) => {
//         let state={
//             showView:"block",
//             showEdit:"none",
//             showGrid:"none",
//             mode:'详情'
//         }
//         if(record) state.formValues=record
//         this.setState(state);
//         return true;
//     }
//     onEdit= (id,record) => {
//         // console.log("onEdit")
//         // console.log(record)
//         // let _record={};
//         // for (let rowIndex = 0; rowIndex < this.props.items.length; rowIndex++) {
//         //     let rowItems = this.props.items[rowIndex];
//         //     for (let colIndex = 0; colIndex < rowItems.length; colIndex++) {
//         //         let id=rowItems[colIndex].id;
//         //          _record[id]=record[id]
//         //     }
//         // }
//         let me=this;
//         // api.post(this.props.url+"get",{id}).then(function (rs) {
//         me.setState({
//             showView:"none",
//             showEdit:"block",
//             showGrid:"none",
//             mode:'编辑'
//         });
//         record=this.state.formValues;
//         this.formEditEl.setFieldsValue(record);
//         // });
//         return true;
//     }
//     onDel= () => {
//         let me=this;
//         if(me.state.selected.length==0){
//             message.error('请选择记录！');
//             return;
//         }
//         Modal.confirm({
//             title: '警告',
//             content: '确定删除？',
//             okText: '确认',
//             cancelText: '取消',
//             onOk:function(){
//                 api.post(me.props.url+"delete",{
//                     id:me.state.selected
//                 }).then(function (rs) {
//                     me.onLoad(me.state.params||{});
//                 });
//             }
//         });

//     }
//     /*** FormEdit ***/
//     onFormCancel= () => {
//         this.setState({
//             showEdit:"none",
//             showView:"none",
//             showGrid:"block"
//         });
//         return true;
//     }
//     onFormSave= (values) => {
//         // console.log(values)
//         this.setState({
//             showEdit:"none",
//             showGrid:"block"
//         });
//         let me=this;
//         api.post(this.props.url+"save",values).then(function (rs) {
//              me.onLoad(me.state.params||{});
//         });
//         return true;
//     }
//     onFormEditRef = (ref) => {
//         this.formEditEl = ref
//     }
//     /*** Toolbar ***/
//     onSearch= (params) => {
//         // console.log(params)
//     }
//     /*** ***/
//     render() {
//         var columns=this.props.columns;
//         for(let i=0;i<columns.length;i++){
//             if(columns[i].render=="edit"){
//                 columns[i].render=(text, record) => {
//                     return   <a  onClick={() => this.onView(record.id,record)}>{text}</a>
//                 }
//             }
//         }
//         return (
//             <>
//             <div className="grid" style={{display:this.state.showGrid}}>
//                 <Row gutter={{xs:24, sm: 24, md: 24,lg:24,xl:24,xxl:24}} key={-1}>
//                     <Col className="title" ><Icon type="setting" theme="filled" />{this.props.title}</Col>
//                 </Row>
//                 <Row className="toolbar" gutter={{xs:24, sm: 24, md: 24,lg:24,xl:24,xxl:24}} key={-2}>
//                     <Col  className="text-left"  xs={{span:8}}>
//                         <Button type="primary" onClick={this.onAdd}>
//                             <span className="iconfont icon-jiahao"></span>录入
//                         </Button>

//                         <Button className="btn-del" onClick={this.onDel}>
//                             <span className="iconfont icon-remove"></span>删除
//                         </Button>
//                     </Col>
//                     <Toolbar key="_toolbar" {...this.props.toolbar} onSearch={this.onSearch.bind(this)}/>
//                 </Row>
//                 <Table
//                     {...this.props.tableCfg}

//                     columns={columns}
//                     rowSelection={{
//                         onChange: (selectedRowKeys, selectedRows) => {
//                             this.setState({
//                                 selected:selectedRowKeys
//                             },function(){
//                             });
//                             // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//                         },
//                         getCheckboxProps: record => ({
//                             //disabled: record.name === 'Disabled User', // Column configuration not to be checked
//                             name: record.name,
//                         })
//                     }}
//                     // title={()=>{return this.props.title}}
//                     dataSource={this.state.data}
//                     pagination={this.state.pagination}
//                     loading={this.state.loading}
//                     onChange={this.onChange}
//                     // expandedRowRender={record => <p style={{ margin: 0 }}>{record.code}</p>}
//                     // scroll={{ y: 240 }}
//                 />
//             </div>
//             <div style={{display:this.state.showEdit}}>
//                 <FormEditEl {...this.props}
//                     mode={this.state.mode}
//                     // formValues={this.state.formValues}
//                     onCancel={this.onFormCancel}
//                     onSave={this.onFormSave}
//                     onRef={this.onFormEditRef}
//                     onView={this.onView}
//                 />
//             </div>
//             <div style={{display:this.state.showView}}>
//                 <FormViewEl {...this.props}
//                     mode={this.state.mode}
//                     onCancel={this.onFormCancel}
//                     formValues={this.state.formValues}
//                     onEdit={this.onEdit}
//                 />
//             </div>
//             </>
//         );
//     }
// }
"use strict";