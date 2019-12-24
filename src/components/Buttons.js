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
               <li style={{float:"left",margin:"15px"}}><Button className="btn-notPass">btn-notPass</Button></li>
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
               <li style={{float:"left",margin:"15px"}}><a className="btn-eaxm">btn-eaxm</a></li>


               <li style={{float:"left",margin:"15px"}}><a className="btn-set">btn-set</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-extract">btn-extract</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-notice">btn-notice</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-begin">btn-begin</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-disabled">btn-disabled</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-saveRs">btn-saveRs</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-record">btn-record</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-return">btn-return</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-confirm">btn-confirm</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-close">btn-close</a></li>
               <li style={{float:"left",margin:"15px"}}><a className="btn-confirmed">btn-confirmed</a></li>

               
           </ul>   
        );
    }
}

