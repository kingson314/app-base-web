import React from 'react';
import { Select } from 'antd';
import axios from '../../utils/axios';

const Option = Select.Option;
const url= "CfgDictionary/getByType";
export default  class Dic extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hasNullVal:true,
            nullValue:"",
            nullText:"请选择",
            data:[]
        }
        this.initData()
    }
    
    async initData(){
        let rs= await axios.post(url,this.props.params);
        this.setState({data:rs.data})
    }
    init(){
        var me=this;
        const rows = [];
        this.state.hasNullVal&&rows.push(<Option key="-1" value={this.state.nullValue}>{this.state.nullText}</Option>);
        if(!this.state.data)return rows;
        var len=this.state.data.length;
        for(let i=0;i<len;i++){
            let item=this.state.data[i];
            let value=item.value
            let text=item.zh_CN
            rows.push(<Option key={value} title={text}>{text}</Option>);
        };
        return rows;
    }
    render() {
        return (
            <Select {...this.props}>
                {this.init()}
            </Select>
        );
    }
}