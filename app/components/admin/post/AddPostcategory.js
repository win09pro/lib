import React from 'react';
import ReactDOM from 'react-dom';
import AddPostCategoryStore from '../../../stores/admin/post/AddPostCategoryStore';
import AddPostCategoryActions from '../../../actions/admin/post/AddPostCategoryActions';

class AddPostcategory extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = AddPostCategoryStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
  AddPostCategoryStore.listen(this.onChange);  
  }

  componentWillUnmount() {
   AddPostCategoryStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  // reset()
  // {
  //   AddPostCategoryActions.resetAll();
  //   //console.log(this.state.userNameValidationState);
  // }


  handleSubmitPost(event)
   {
    
    var nameCate = this.state.nameCate.trim();
    var Type =this.state.Type;   
    if (!nameCate) {
      AddPostCategoryActions.invalidnameCate();
      this.refs.nameCateField.focus();
    }

    if (!Type) {
      AddPostCategoryActions.invalidType();
      this.refs.TypeField.focus();
    }
    if (Type && nameCate)
     {
          AddPostCategoryActions.addPostCate({
            id:this.state.id,
            nameCate:nameCate,
            Type:Type
           });
    }
     event.preventDefault();
  }
  render() {
     return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='panel panel-danger'>
              <div className='panel-heading'><strong>Thêm danh mục bài viết</strong></div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmitPost.bind(this)} className= "form-horizontal" enctype="multipart/form-data">
                  <div className={'form-group ' + this.state.nameCateValidation }>
                    <label className='col-sm-2 control-label'>Tên danh mục bài viết</label>
                    <div  className ='col-sm-10 right-inner-addon'>
                      <i className="fa fa-newspaper-o"></i>
                      <input type='text' className='form-control' ref='nameCateField' value={this.state.nameCate}
                      onChange={AddPostCategoryActions.updateNameCate} autoFocus/>
                      <span className='help-block'>{this.state.helpBlockNameCate}</span>
                    </div>
                  </div>
                   <div className={'form-group ' + this.state.typeValidationState}>
                    <label className='col-sm-2 control-label'>Kiểu danh mục</label>
                     <div  className ='col-sm-10 right-inner-addon'>
                     <select className='form-control' value ={this.state.Type}  ref='TypeField' onChange ={AddPostCategoryActions.updateType} >
                      <option value =''>-Chọn danh mục đăng bài-</option>
                      <option value ='1'>Giới thiệu</option>                      
                      <option value ='2'>Dịch vụ</option>
                      <option value ='3'>Trợ giúp</option>
                      <option value ='4'>Tin tức</option>
                      </select>
                    <span className='help-block'>{this.state.helpBlocktype}</span>
                    </div>
                  </div>                   
                  <button type='submit' className='btn btn-primary'>Đồng ý</button>
                  <input type="button" className='btn btn-warning' onClick = {AddPostCategoryActions.clearAll} value ='Làm sạch'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default AddPostcategory;
