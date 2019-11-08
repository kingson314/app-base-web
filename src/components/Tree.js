import React from 'react';
import { TreeSelect } from 'antd';
import axios from '../utils/axios';
import { array, instanceOf } from 'prop-types';

export default class MyTreeSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      label: undefined,
      treeData: [
        // { id: -1, pId: 0, value: '', title: '', isLeaf: false }
      ],
    };
    this.initData();
  }
  async initData() {
    let rs = await axios.post(this.props.url, this.props.params || {});
    this.setState({ treeData: rs.data });
  }
  // componentDidMount() {
  //   this.props.onRef && this.props.onRef(this);
  // }
  onChange(value, label, extra) {
    if (value) {
      if (value instanceof Array) {
        value = JSON.stringify(value);
      }else {
        value = JSON.stringify([value]);
      }
    }
    if (label) label = JSON.stringify(label);
    if (this.props.onChange) this.props.onChange(value, label);
    else this.setState({ value, label });
  }
  render() {
    let _value = this.state.value;
    if (this.props.value) _value = JSON.parse(this.props.value)
    const tProps = {
      treeData: this.state.treeData,
      "value": _value,
      treeCheckable: this.props.treeCheckable,
      treeDefaultExpandAll:this.props.treeDefaultEexpandAll==false?false:true,
      showCheckedStrategy: this.props.showCheckedStrategy || "SHOW_CHILD",//SHOW_CHILD |  SHOW_ALL | SHOW_PARENT
      searchPlaceholder: this.props.placeholder || '请选择',
      showSearch: this.props.showSearch || true,
      treeNodeFilterProp: this.props.treeNodeFilterProp || "title",
      style: {
        width: '100%'
      },
      dropdownStyle: { maxHeight: 600, overflow: 'auto' },
      onChange: this.onChange.bind(this)
    };
    return (<TreeSelect treeDataSimpleMode {...tProps} />);
  }
}