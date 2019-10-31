import React from 'react';
import { Select } from 'antd';
// import dicList from '../../dicList'
// import axios from '../../utils/axios';
import dic from '../../utils/dic';
const Option = Select.Option;
// const url= "CfgDictionary/getByType";
export default  class Dic extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            hasNullVal:true,
            nullValue:"",
            nullText:"请选择",
            data:[]
        }
        // this.initData();
    }
    
    // async initData(){
    //     if(this.props.sync){ 
    //         let rs= await axios.post(url,this.props.params);
    //         this.setState({data:rs.data});
    //     }
    // }
    init(){
        var me=this;
        const rows = [];
        this.state.hasNullVal&&rows.push(<Option key="-1" value={this.state.nullValue}>{this.state.nullText}</Option>);
        let data;
        // if(this.props.sync){
        //     data=this.state.data;
        // }else{
            if(this.props.params.subType){
                data=dic.list(this.props.params.app,this.props.params.type,this.props.params.subType);
            }else {
                data=dic.list(this.props.params.app,this.props.params.type);
            }
        // }
        if(!data)return rows;
        var len=data.length;
        for(let i=0;i<len;i++){
            let item=data[i];
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