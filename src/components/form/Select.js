import React from 'react';
import { Select } from 'antd';
import axios from '../../utils/axios';

const Option = Select.Option;

export default  class Select1 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            valueKey:"id",
            textKey:"name",
            hasNullVal:true,
            nullValue:"",
            nullText:"请选择",
            data:[]
        }
        this.initData()
    }
    
    async initData(){
        if(this.props.url){
            let rs= await axios.post(this.props.url,this.props.params);
            this.setState({data:rs.data})
        }
    } 
    init(){
        var me=this;
        const rows = [];
        if(this.props.url){
            this.state.hasNullVal&&rows.push(<Option key="-1" value={this.state.nullValue}>{this.state.nullText}</Option>);
            if(!this.state.data)return rows;
            var len=this.state.data.length;
            for(let i=0;i<len;i++){
                let item=rs.data[i];
                let value=item[me.state.valueKey]
                let text=item[me.state.textKey];
                rows.push(<Option key={value} >{text}</Option>);
            };
        }else{
            var len=this.props.options.length;
            if(this.props.options[0] instanceof Object){
                for(let i=0;i<len;i++){
                    let item=this.props.options[i];
                    let value=item[me.state.valueKey]
                    let text=item[me.state.textKey];
                    rows.push(<Option key={value}>{text}</Option>);
                }
            }else{
                for(let i=0;i<len;i++){
                    let value=this.props.options[i];
                    rows.push(<Option key={value}>{value}</Option>);
                }
            }
        }
        return rows;
    }
    render() {
        return (
            <Select {...this.props} defaultValue={this.props.val} >
                {this.init()}
            </Select>
        );
    }
}