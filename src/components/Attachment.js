import React from 'react'
import net from '../utils/net'
//附件
export default class Attachment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlArr: [],
            attnameArr: []
        }
    }
    componentDidMount() {
        if(!this.props.url)return;
        let url = this.props.url || "";
        let urlArr = url.split(",");
        let attnameArr = [];
        for (var i = 0; i < urlArr.length; i++) {
            let attname = net.getUrlParam(urlArr[i], "attname");
            attnameArr.push(attname);
        }
        this.setState({
            urlArr,
            attnameArr
        });
    }
    render() {
        return (
            <span>
                {this.state.urlArr.map((url, index) => (
                    <a style={{marginRight:"8px"}} key={index} href={url} download={this.state.attnameArr[index]}>{this.state.attnameArr[index]}</a>
                ))}
            </span>
        );
    }
}

