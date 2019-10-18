// import React from 'react'
// import {
//     Form, Row, Col,Button,Table,Icon,message
// } from 'antd';

// class EditableTable extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { data, editingKey: '' };
//         this.columns = [
//             {
//                 title: 'name',
//                 dataIndex: 'name',
//                 width: '25%',
//                 editable: true,
//             },
//             {
//                 title: 'sex',
//                 dataIndex: 'sex',
//                 width: '15%',
//                 editable: true,
//             },
//             {
//                 title: 'state',
//                 dataIndex: 'address',
//                 width: '40%',
//                 editable: true,
//             },
//             {
//                 title: 'operation',
//                 dataIndex: 'operation',
//                 render: (text, record) => {
//                      return   <a  onClick={() => this.edit(record.id)}>Edit</a>
//                 }
//             },
//         ];
//     }

//     render() {
//         return (
//             <EditableContext.Provider value={this.props.form}>
//                 <Table
//                     bordered
//                     dataSource={this.state.data}
//                     columns={columns}
//                     rowClassName="editable-row"
//                     pagination={{
//                         onChange: this.cancel,
//                     }}
//                 />
//             </EditableContext.Provider>
//         );
//     }
// }
// export default  EditableTable;