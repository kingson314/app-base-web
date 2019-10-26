import React from 'react';
import { TreeSelect } from 'antd';
import axios from '../utils/axios';
import { array } from 'prop-types';

export default class MyTreeSelect extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value:undefined,
      label:undefined,
      treeData: [
        // { id: -1, pId: 0, value: '', title: '', isLeaf: false }
      ],
    };
    this.initData();
  }
  async initData(){
    let rs= await axios.post(this.props.url,this.props.params||{});
    this.setState({treeData:rs.data});
    // console.log(JSON.stringify(this.state.treeData));
  }
  componentDidMount() {
    this.props.onRef&&this.props.onRef(this);
  }
  onChange(value, label, extra){
    this.setState({ value,label });
    if(this.props.onChange)this.props.onChange(value, label, extra);
  }
  render() {
    let value=this.state.value;
    if(this.props.value){
      value=this.props.value;
    }
    if(this.state.value instanceof Array){
      value=this.state.value;
    }
    console.log(value);
    const tProps = {
      treeData:this.state.treeData,
      "value":value,
      treeCheckable: this.props.treeCheckable,
      showCheckedStrategy: this.props.showCheckedStrategy||"SHOW_CHILD",//SHOW_CHILD |  SHOW_ALL | SHOW_PARENT
      searchPlaceholder: this.props.placeholder||'请选择',
      showSearch:this.props.showSearch||true,
      treeNodeFilterProp:this.props.treeNodeFilterProp||"title",
      style: {
        width: '100%'
      },
      dropdownStyle:{ maxHeight: 600, overflow: 'auto' },
      onChange: this.onChange.bind(this)
    };
    return (<TreeSelect  treeDataSimpleMode {...tProps} />);
  }
}