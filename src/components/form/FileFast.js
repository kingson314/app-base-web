import React from 'react';
import { Upload, Button, Icon } from 'antd';

export default class File extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fileList:"[]"
    };
  }
  componentDidMount() {
    this.props.onRef&&this.props.onRef(this);
  }
  onChange(info){
    let fileList = [...info.fileList];
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.data;
        delete file.thumbUrl;
        delete file.lastModifiedDate;
        delete file.originFileObj;
        delete file.response;
      }
      return file;
    });
    if(fileList)fileList=JSON.stringify(fileList);
    if(this.props.onChange)this.props.onChange(fileList);
    else this.setState({fileList});
    console.log(fileList)
  };
  render() {
    let _fileList=JSON.parse(this.props.fileList||this.state.fileList);
    return (
      <Upload className={this.props.cls} action="https://fastdfs.7ipr.com/ipr/fastdfs/upload" multiple={true} onChange={this.onChange.bind(this)} fileList={_fileList} listType="picture">
        <Button style={{display:this.props.hide=="true"?"none":""}}>
          <Icon type="upload" /> 上传
        </Button>
      </Upload>
    );
  }
}