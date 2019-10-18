import React from 'react';
import { Upload, Button, Icon } from 'antd';

export default class File extends React.Component {
  
  constructor(props) {
    super(props);
    let _fileList=[]
    if(this.props.fileList){
      _fileList=JSON.parse(this.props.fileList);
    }
    this.state = {
      fileList:_fileList
    };
  }
  componentDidMount() {
    this.props.onRef&&this.props.onRef(this);
  }
  onChange(info){
    let fileList = [...info.fileList];
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = this.props.serverPath+file.response.data.file[0];
        delete file.lastModifiedDate;
        delete file.originFileObj;
        delete file.response;
      }
      return file;
    });
    // console.log(fileList);
    this.setState({ fileList });
  };
  render() {
    return (
      <Upload action={this.props.serverPath+"upload/run"}  multiple={true} onChange={this.onChange.bind(this)} fileList={this.state.fileList} listType="picture">
        <Button style={{display:this.props.hide=="true"?"none":""}}>
          <Icon type="upload" /> 上传
        </Button>
      </Upload>
    );
  }
}