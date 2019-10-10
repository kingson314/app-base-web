// import React from 'react'
// import {
//     Col,AutoComplete,Checkbox,DatePicker,Input,Radio,Switch,Select,Button
// } from 'antd';
// const Search = Input.Search;
// export  default class Toolbar extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {

//     }
//     onChange(e){
//         // console.log(e.target.id+"/"+e.target.value)
//         let id=e.target.id
//         let value =e.target.value
//         this.setState({
//            [id]:value
//         });
//     }
//     onSearch(){
//         this.props.onSearch(this.state);
//     }
//     init(){
//         let items=this.props.items;
//         const CheckboxGroup = Checkbox.Group;
//         const RadioGroup = Radio.Group;
//         const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
//         const cols = [];
//         for (let index = 0; index < items.length; index++) {
//             let item=items[index];
//             if(!item.id)continue;
//             item.key="tool-item-"+item.id
//             let field;
//             switch(item.type.toLowerCase()){
//                 case "autocomplete":
//                     field=<AutoComplete {...item}/>
//                     break
//                 case "button":
//                     field=<Button {...item} onClick={this.onSearch.bind(this)} />
//                     break
//                 case "checkboxgroup":
//                     field=<CheckboxGroup {...item}/>
//                     break
//                 case "date":
//                 case "datepicker":
//                     switch(item.subType.toLowerCase()){
//                         case "month":
//                             field=<MonthPicker {...item}/>
//                             break
//                         case "week":
//                             field=<WeekPicker {...item}/>
//                             break
//                         case "range":
//                             field=<RangePicker {...item}/>
//                             break
//                         default:
//                             field=<DatePicker {...item}/>
//                             break;
//                     }
//                     break
//                 case "textfield":
//                 case "text":
//                     field=<Input {...item} onChange={this.onChange.bind(this)}/>
//                     break
//                 case "search":
//                     field=<Search {...item}  onSearch={value => console.log(value)} enterButton/>
//                     break
//                 case "radiogroup":
//                     field=<RadioGroup {...item}/>
//                     break
//                 case "switch":
//                     field=<Switch {...item}/>
//                     break
//                 case "select":
//                     field=<Select {...item}/>
//                     break
//                 default:
//                     continue;
//             }
//             cols.push(<span className="separator" key={"span_"+item.id}>{field}</span>);
//         }
//         return cols;
//     }
//     render() {
//         return (
//             <Col span={this.props.span} className="ant-form-item-field text-right" >
//                 { this.init() }
//             </Col>
//         );
//     }
// }