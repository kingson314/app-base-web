import React from 'react';
import { Upload, Button, Icon } from 'antd';

export default class File extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fileList: [
      ],
    };
	}
  handleChange(info){
    let fileList = [...info.fileList];
    for(var i=0;i<fileList.length;i++){
      if(fileList[i].response&& fileList[i].response.success) {
        fileList[i].url =this.props.serverPath+fileList[i].response.data.file[0]
      }
    }
    fileList = fileList.map(file => {
      return file;
    });
    console.log(fileList)
    this.setState({ fileList });
  };

  render() {
    return (
      <Upload action={this.props.serverPath+"/upload/run"}  multiple="true" onChange={this.handleChange.bind(this)} fileList={this.state.fileList} listType="picture">
        <Button>
          <Icon type="upload" /> 上传
        </Button>
      </Upload>
    );
  }
}