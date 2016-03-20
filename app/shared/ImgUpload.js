import React from 'react';
import ReactDom from 'react-dom';


export default class ImgUpload extends React.Component {
   handleFile(e){
    var reader = new FileReader();
    var file = e.target.files[0];
      console.log(file); 
    if (!file) return;

    reader.onload = function(img) {
      ReactDom.findDOMNode(this.refs.in).value = '';
      this.props.actions.updateAvatarpreview(img.target.result);   

      this.props.actions.updateAvatarfile(file);
    }.bind(this);
    reader.readAsDataURL(file);
}
  render(){
    return (
      <div>          
      <input ref="in" type="file" accept="image/*" onChange={this.handleFile.bind(this)} />       
      </div>
    );
  }
}
