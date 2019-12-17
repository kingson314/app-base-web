import React from 'react'

import { Button, Icon } from 'antd';
export default class Empty extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <ul style={{padding:"30px 5%"}}>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-copy">btn-copy</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-detail">btn-detail</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-collapse">btn-collapse</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-add">btn-add</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-del">btn-del</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-active">btn-active</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-sendMsg">btn-sendMsg</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-sendEmail">btn-sendEmail</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-auth">btn-auth</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-audit">btn-audit</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-notAudit">btn-notAudit</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-pass">btn-pass</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-his">btn-his</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-score">btn-score</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-revoke">btn-revoke</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-revoke1">btn-revoke1</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-publish">btn-publish</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-ask">btn-ask</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-contact">btn-contact</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-send">btn-send</Button></li>
               <li style={{float:"left",margin:"15px"}}><Button className="btn-large">btn-large</Button></li>
           </ul>   
        );
    }
}

