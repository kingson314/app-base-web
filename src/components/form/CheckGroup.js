
import React from 'react';
import { Checkbox } from 'antd';
import dic from '../../utils/dic';
export default class CheckGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "[]",
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
                rows.push(<Checkbox style={{ marginRight: "5px" }} key={"chekbox-" + i} value={value}>{text}</Checkbox>);
            };
        }else{
            this.state.options.map((item, index) => {
                if(item instanceof Object){
                    rows.push( <Checkbox style={{ marginRight: "5px" }} key={"chekbox-" + index} value={item.id}>{item.name}</Checkbox>);
                }else{
                    rows.push( <Checkbox style={{ marginRight: "5px" }} key={"chekbox-" + index} value={item}>{item}</Checkbox>);
                }   
            })
        }
        return rows;
    }
    onChange(value) {
        if (value) value = JSON.stringify(value);
        if (this.props.onChange) this.props.onChange(value);
        else this.setState({ value });
    }
    render() {
        let _value = JSON.parse(this.props.value || this.state.value);
        return (
            <Checkbox.Group value={_value} onChange={this.onChange.bind(this)}>
                 {this.init()}
            </Checkbox.Group>);

    }
}