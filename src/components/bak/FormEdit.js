// import React from 'react'
// import {
//     Form, Row, Col,Icon,Select,
//     AutoComplete,Checkbox,Cascader,DatePicker,InputNumber,Input,Mention,Rate,Radio,Switch, Slider,TreeSelect,Transfer,TimePicker,Upload,Button,
// } from 'antd';
// import * as api from '@/api/index'
// import * as  UtilCom from '@/utils/UtilCom'
// import Dic from './form/Dic'
// const Textarea=Input.Textarea
// const RadioGroup = Radio.Group;
// const Option = Select.Option;
// export default  class FormEdit extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     componentDidMount(){
//         this.props.onRef(this)
//     }
//     init(){
//         let items=this.props.items;
//         const CheckboxGroup = Checkbox.Group;
//         const RadioGroup = Radio.Group;
//         const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
//         const { getFieldDecorator } = this.props.form;
//         const rows = [];

//         let maxColCount = items[0].length; // 潜规则1：以首行配置的列数为最大列数(包含hidden类型以及空对象)
//         for (let rowIndex = 0; rowIndex < items.length; rowIndex++) {
//             let rowItems = items[rowIndex];
//             let cols=[];
//             let cssrow=rowItems[0].cssrow||{};
//             let clsrow=(rowItems[0].clsrow||"field-row")
//             for (let colIndex = 0; colIndex < rowItems.length; colIndex++) {
//                 let item=rowItems[colIndex];
//                 if(!item.id)continue;
//                 //属性转换
//                 // let item={
//                 //     "id":itemOld.id,
//                 //     "placeholder":itemOld.placeholder||"",
//                 //     "prefix": itemOld.prefix||"",
//                 //
//                 //     "url":itemOld.url||"",
//                 //     "options":itemOld.options||[],
//                 //     "params":itemOld.params||{},
//                 //     "val":itemOld.val||"",
//                 //
//                 //     "colspan":itemOld.colspan
//                 // };
//                 delete item.hide;
//                 let field;
//                 switch(item.type.toLowerCase()){
//                     case "hidden":
//                         field=<Input type="hidden" {...item}/>
//                         cssrow={"display":"none"}
//                         break
//                     case "autocomplete":
//                         field=<AutoComplete {...item}/>
//                         break
//                     case "checkbox":
//                         field=<Checkbox {...item}/>
//                         break
//                     case "checkboxgroup":
//                         field=<CheckboxGroup {...item}/>
//                         break
//                     case "cascader":
//                         field=<Cascader {...item}/>
//                         break
//                     case "date":
//                     case "datepicker":
//                         switch((item.subType||"").toLowerCase()){
//                             case "month":
//                                 field=<MonthPicker {...item}/>
//                                 break
//                             case "week":
//                                 field=<WeekPicker {...item}/>
//                                 break
//                             case "range":
//                                 field=<RangePicker {...item}/>
//                                 break
//                             default:
//                                 field=<DatePicker {...item}/>
//                                 break;
//                         }
//                         break
//                     case "number":
//                     case "inputnumber":
//                         field=<InputNumber {...item}/>
//                         break
//                     case "textfield":
//                     case "text":
//                         field=<Input {...item}/>
//                         break
//                     case "mention":
//                         field=<Mention {...item}/>
//                         break
//                     case "rate":
//                         field=<Rate {...item}/>
//                         break
//                     case "radio":
//                         let radios=[];
//                         if(item.items){
//                             for(let o of item.items){
//                                 radios.push(<Radio key={o.id} value={o.id}>{o.name}</Radio>)
//                             }
//                         }
//                         field=<RadioGroup {...item}>
//                                 {radios}
//                             </RadioGroup>
//                         break
//                     case "radiogroup":
//                         let radiosbutton=[];
//                         if(item.items){
//                             for(let o of item.items){
//                                 radiosbutton.push(<Radio.Button key={o.id} value={o.id}>{o.name}</Radio.Button>)
//                             }
//                         }
//                         field=<RadioGroup {...item}>
//                                 {radiosbutton}
//                             </RadioGroup>
//                         break
//                     case "switch":
//                         field=<Switch {...item}/>
//                         break
//                     case "slider":
//                         field=<Slider {...item}/>
//                         break
//                     case "dic":
//                         field=<Dic {...item}/>
//                         break
//                     case "select":
//                         // field=<Select {...item}/>
//                         break
//                     case "textarea":
//                         field=<Textarea {...item}>item.val||""</Textarea>
//                         break
//                     case "treeselect":
//                         field=<TreeSelect {...item}/>
//                         break
//                     case "transfer":
//                         field=<Transfer {...item}/>
//                         break
//                     case "time":
//                     case "timepicker":
//                         field=<TimePicker {...item}/>
//                         break
//                     case "upload":
//                         field=<Upload {...item}/>
//                         break
//                     default:
//                         continue;
//                 }
//                 let clsArr=UtilCom.getCls(maxColCount,item.colSpan);
//                 if(item.label){
//                     cols.push(<Col key={item.id+"_label"}  className="ant-form-item-label" {...clsArr[0]}>{item.label}</Col>);
//                 }else if(item.labelwidth){
//                     cols.push(<Col {...clsArr[0]}></Col>);
//                 }
                    

//                 cols.push( <Col key={item.id} className="ant-form-item-field" {...clsArr[1]}><Form.Item >
//                     {getFieldDecorator(`${item.id}`, {
//                         ...item.decorator
//                     })(
//                         field
//                     )}
//                 </Form.Item></Col>)
//             }
//             rows.push(<Row className={clsrow} style={{...cssrow}} gutter={{xs:24, sm: 24, md: 24,lg:24,xl:24,xxl:24}} key={rowIndex}>
//                {cols}
//             </Row>);
//         }
//         return rows;
//     }
//     setFieldsValue= (record) => {
//         setTimeout(()=>{
//             this.props.form.setFieldsValue(record)
//         },0)
//     }
//     resetFields= (record) => {
//         this.props.form.resetFields()
//     }
//     onSave = (e) => {
//         e.preventDefault();
//         this.props.form.validateFields((err, values) => {
//             if(err)return;
//             return this.props.onSave(values);
//         });
//     }
//     render() {
//         let title="";
//         if(this.props.title){
//             if(this.props.mode=="编辑"){
//                 <Row gutter={{xs:24, sm: 24, md: 24,lg:24,xl:24,xxl:24}} key={-1}>
//                     <Col  xs={{span:16}} className="title" ><Icon type="setting" theme="filled" />{this.props.title} - {this.props.mode}</Col>
//                     <Col  xs={{span:8}} className="title-btn" ><Button onClick={this.props.onView}><span className="iconfont icon-return"></span>返回</Button></Col>
//                 </Row>
//             }else{
//                  title=<Row gutter={{xs:24, sm: 24, md: 24,lg:24,xl:24,xxl:24}} key={-1}>
//                     <Col  xs={{span:16}} className="title" ><Icon type="setting" theme="filled" />{this.props.title} - {this.props.mode}</Col>
//                 </Row>
//             }
//         }
//         let toolbar=""
//         if(this.props.onCancel){
//             toolbar=<Col className="toolbar">
//                 <Button type="primary" onClick={this.onSave.bind(this)}><span className="iconfont icon-yes"></span>保存</Button>
//                 <Button onClick={this.props.onCancel}><span className="iconfont icon-return"></span>取消</Button>
//             </Col>
//         }else{
//             toolbar=<Col className="toolbar">
//                 <Button type="primary" onClick={this.onSave.bind(this)}><span className="iconfont icon-yes"></span>保存</Button>
//             </Col>
//         }
//         return (
//             <div className="form-edit">
                
//                 <Form {...this.props.formCfg}
//                     className="ant-advanced-search-form"
//                 >
//                     {title}
//                     {this.init()}
//                     <Row gutter={{xs:24, sm: 24, md: 24,lg:24,xl:24,xxl:24}} key={-2}>
//                         {toolbar}
//                     </Row>
//                 </Form>
//             </div>
//         );
//     }
// }