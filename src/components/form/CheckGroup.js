
import React from 'react';
import { Checkbox } from 'antd';
 
export default  class CheckGroup extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            value:"[]"
        }
    }
    componentDidMount() {
        this.props.onRef&&this.props.onRef(this);
    }
    onChange(value){
        if(value)value=JSON.stringify(value);
        if(this.props.onChange)this.props.onChange(value);
        else this.setState({value});
    }
    render() {
        let _value=JSON.parse(this.props.value||this.state.value);
        return (
            <Checkbox.Group value={_value} onChange={this.onChange.bind(this)}>
                {this.props.options.map((item,index)=>{
                    return <Checkbox style={{marginRight:"5px"}} key={"chekbox-"+index} value={item}>{item}</Checkbox>
                })}
            </Checkbox.Group>);
        
    }
}