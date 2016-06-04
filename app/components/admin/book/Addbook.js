import React from 'react';
import AddBookStore from '../../../stores/admin/book/AddBookStore';
import AddBookAction from '../../../actions/admin/book/AddBookAction';

import CategoryListStore from '../../../stores/admin/category/CategoryListStore';
import CategoryListAction from '../../../actions/admin/category/CategoryListAction';
import ImgUpload from '../../../shared/ImgUpload';

class AddBook extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = {state1:AddBookStore.getState(),state2:CategoryListStore.getState()};
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {    
    AddBookStore.listen(this.onChange);
    CategoryListStore.listen(this.onChange);
    CategoryListAction.get();
  }

  componentWillUnmount() {
    AddBookStore.unlisten(this.onChange);
    CategoryListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState({state1:AddBookStore.getState(),state2:CategoryListStore.getState()});
  }

  upload(event)
  {
      var imgfile = this.state.state1.fileAvatar;
      var imgURL = this.state.state1.imagePreviewUrl;
      AddBookAction.handleUpload();
      AddBookAction.uploadImage(imgfile);
      console.log(this.state.state1.imageUrl);
  }
  detele(event)
  {

      console.log(this.state.state1.imageUrl);
  }

  handleSubmitBook(event)
  {
  	event.preventDefault();
    var id = this.state.state1.id;
    var name = this.state.state1.name.trim();
    var author = this.state.state1.author;
    var publisher = this.state.state1.publisher;
    var code = this.state.state1.code;
    var status = this.state.state1.status;
    var description =this.state.state1.description;
    var imageUrl = this.state.state1.imageUrl;
    var _cateId =this.state.state1._cateId;

    if (!name) {
      AddBookAction.invalidName();
      this.refs.nameTextField.focus();
    }

    if (!author) {
      AddBookAction.invalidAuthor();
      this.refs.AuthorTextField.focus();
    }
    if(!publisher){
      AddBookAction.invalidPublisher();
      this.refs.PublisherTextField.focus();
    }
    if(!code){
      AddBookAction.invalidBarcode();
      this.refs.CodeTextField.focus();
    }
    if(status == 0){
      AddBookAction.invalidStatus();
    }
    if(!description){
      AddBookAction.invalidDescription();
      this.refs.DescriptionTextField.focus();
    }
    if(!_cateId){
      AddBookAction.invalidCate();
      this.refs.CateTextField.focus();
    }
    
    if (name && author && publisher && code && status && description && _cateId) {
      AddBookAction.addBook({id:id, name:name, author:author, publisher:publisher, 
        code:code, status:status, description:description, _cateId:_cateId, imageUrl: this.state.state1.imageUrl});
    }
  }

  render() {
    let categoryList = this.state.state2.listcategory.map((cate,index)=>{
      if(this.state.state1._cateId == cate._id){
          return(
              <option value={cate._id} key={index+1} selected >
                  {cate.name}
              </option>
          );
      }
      else{
          return (
              <option value={cate._id} key={index+1}>
                  {cate.name}
              </option>
          );
      }
    });
    return (
      
          <div className=''>
            <div className='panel panel-default'>
              <div className='panel-heading'>Thêm sách</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitBook.bind(this)}>

                  <div className={'form-group ' + this.state.state1.nameValidationState}>
                    <label className='control-label'>Tên</label>
                    <input type='text' className='form-control' ref='NameTextField' value={this.state.state1.name}
                           onChange={AddBookAction.updateName} autoFocus/>
                    <span className='help-block'>{this.state.state1.helpBlockName}</span>
                  </div>
                  <div className={'form-group ' + this.state.state1.authorValidationState}>
                    <label className='control-label'>Tác giả</label>
                    <input type='text' className='form-control' ref='AuthorTextField' value={this.state.state1.author}
                           onChange={AddBookAction.updateAuthor}/>
                    <span className='help-block'>{this.state.state1.helpBlockAuthor}</span>                    
                  </div>
                  <div className={'form-group ' + this.state.state1.publisherValidationState}>
                    <label className='control-label'>Nhà xuất bản</label>
                    <input type='text' className='form-control' ref='PublisherTextField' value={this.state.state1.publisher}
                           onChange={AddBookAction.updatePublisher}/>
                    <span className='help-block'>{this.state.state1.helpBlockPublisher}</span>                    
                  </div> 
                  <div className={'form-group ' + this.state.state1.codeValidationState}>
                    <label className='control-label'>Barcode</label>
                    <input type='number' className='form-control' ref='CodeTextField' value={this.state.state1.code}
                           onChange={AddBookAction.updateCode}/>
                    <span className='help-block'>{this.state.state1.helpBlockCode}</span>                    
                  </div>
                  <div className={'form-group ' + this.state.state1.statusValidationState}>
                    <label className='control-label'>Trạng thái</label>
                      <select className='form-control' value={this.state.state1.status} onChange={AddBookAction.updateStatus}>
                          <option value='0'>-- Chọn trạng thái --</option>
                          <option value='1'>Trống</option>
                          <option value='2'>Đang chờ</option>
                          <option value='3'>Đang mượn</option>
                      </select>
                    <span className='help-block'>{this.state.state1.helpBlockStatus}</span>                    
                  </div> 
                  <div className={'form-group ' + this.state.state1.descriptionValidationState}>
                    <label className='control-label'>Mô tả</label>
                    <input type='text' className='form-control' ref='DescriptionTextField' value={this.state.state1.description}
                           onChange={AddBookAction.updateDescription}/>
                    <span className='help-block'>{this.state.helpBlockDescription}</span>                    
                  </div> 

                  <div className={'form-group ' + this.state.state1.cateValidationState}>
                    <label className='control-label'>Danh mục</label>
                    <select className="form-control" value={this.state.state1._cateId} ref="CateTextField" onChange={AddBookAction.updateCate}>
                      <option value='0'>--Chọn danh mục--</option>
                      {categoryList}
                    </select>
                    <span className='help-block'>{this.state.state1.helpBlockCate}</span>                    
                  </div>

                  <div className='form-group has-success'>
                   <label className='control-label'>Hình ảnh</label>
                   <div className ="clear-both"></div>
                    <div className="avatar-photo">
                      <ImgUpload actions ={AddBookAction} />
                      <div className="avatar-edit">
                      <i className="fa fa-camera"></i>
                      </div>
                      <img src ={this.state.state1.imagePreviewUrl} height ="200px" width="200px" alt = "avatar"/>
                    </div>
                    <div>
                     <button type='button' className = 'btn btn-success' onClick = {this.upload.bind(this)} ><i className="fa fa-check"></i></button>
                     <button type='button' className = 'btn btn-danger' onClick = {this.detele.bind(this)} ><i className="fa fa-times"></i></button>
                      <span className='help-block'>{this.state.state1.helpBlockUpload}</span>
                    </div>
                  </div>

                    

                                        
                  <button type='submit' className='btn btn-primary'>Thêm</button>
                </form>
              </div>
            </div>            
          </div>          
       
    );
  }
}

export default AddBook;