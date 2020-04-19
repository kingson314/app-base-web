import React from 'react';
import { Upload, Button, Icon } from 'antd';
import stirng from '../../utils/string'

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
  };
  render() {
    let _fileList;
    try{
       _fileList=JSON.parse(this.props.fileList||this.state.fileList);
      if(!(_fileList instanceof Object)){
        _fileList=this.props.fileList;
        let index=_fileList.lastIndexOf('attname=');
        if(index>0){
          let name =_fileList.substring(index+'attname='.length);
          _fileList=[{"uid":stirng.uuid(),"lastModified":1581676081373,"name":name,"size":692032,"type":"image/png","percent":100,"status":"done","xhr":{},"url":this.props.fileList}]
        }else{
          _fileList=[];
        }
      }
    }catch(e){
        _fileList=this.props.fileList;
        let index=_fileList.lastIndexOf('attname=');
        if(index>0){
           let name =_fileList.substring(index+'attname='.length);
           _fileList=[{"uid":stirng.uuid(),"lastModified":1581676081373,"name":name,"size":692032,"type":"image/png","percent":100,"status":"done","xhr":{},"url":this.props.fileList}]
        }else{
          _fileList=[];
        }
    }
    return (
      <Upload className={this.props.cls} action="https://fastdfs.7ipr.com/ipr/fastdfs/upload" multiple={true} onChange={this.onChange.bind(this)} fileList={_fileList} listType="picture">
        <Button style={{display:this.props.hide=="true"?"none":""}}>
          <Icon type="upload" /> 上传
        </Button>
      </Upload>
    );
  }
}