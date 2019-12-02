
import React from 'react';
import { Radio } from 'antd';
import dic from '../../utils/dic';
export default class RadioGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            type: this.props.type || "radio",//radio，button
            //options,dic只有一个能生效
            options: this.props.options,
            dic: this.props.dic,//{ app:"",type:""},
            // url: this.props.url
        }
    }
    init() {
        const rows = [];
        if (this.state.dic) {
            let data;
            if (this.state.dic.subType) {
                data = dic.list(this.state.dic.app, this.state.dic.type, this.state.dic.subType);
            } else {
                data = dic.list(this.state.dic.app, this.state.dic.type);
            }
            if (!data) return rows;
            var len = data.length;
            for (let i = 0; i < len; i++) {
                let item = data[i];
                let value = item.value;
                let text = item.zh_CN;
                if (this.state.type == "button")
                    rows.push(<Radio.Button key={"radio-" + i} value={value}>{text}</Radio.Button>);
                else
                    rows.push(<Radio key={"radio-" + i} value={value}>{text}</Radio>);
            };
        } else {
            this.state.options.map((item, index) => {
                if (item instanceof Object) {
                    if (this.state.type == "button")
                        rows.push(<Radio.Button key={"radio-" + index} value={item.id}>{item.name}</Radio.Button>);
                    else rows.push(<Radio key={"radio-" + index} value={item.id}>{item.name}</Radio>);
                } else {
                    if (this.state.type == "button")
                        rows.push(<Radio.Button key={"radio-" + index} value={item}>{item}</Radio.Button>);
                    else
                        rows.push(<Radio key={"radio-" + index} value={item}>{item}</Radio>);
                }
            })
        }
        return rows;
    }
    onChange(value) {
        if (this.props.onChange) this.props.onChange(value);
        else this.setState({ value });
    }
    render() {
        let _value = this.props.value || this.state.values;
        return (
            <Radio.Group value={_value} onChange={this.onChange.bind(this)}>
                {this.init()}
            </Radio.Group>);

    }
}