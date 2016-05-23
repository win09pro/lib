import React from 'react';
import {Link} from 'react-router';
import AddPostActions from '../../../actions/admin/post/AddPostActions';
import listPostsStore from '../../../stores/admin/post/listPostsStore';
import listPostsActions from '../../../actions/admin/post/listPostsActions';
import ActionBar from '../../../shared/ActionBar';
import AddPost from './AddPost';
import moment from 'moment';
import {Modal} from 'react-bootstrap';
import {Element,scroller}  from  'react-scroll'; 

class ListBooks extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = listPostsStore.getState();
    this.onChange = this.onChange.bind(this);

  }
 componentDidMount() {
    listPostsStore.listen(this.onChange);
    listPostsActions.get(); 
  }

  componentWillUnmount() {
    listPostsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  handleChange(e)
  {
    var id = e.target.attributes['data-ref'].value;
    if (e.target.checked )
    {
        listPostsActions.updateArrayId(id);
    }
    else
    {
     listPostsActions.removeArrayId (id);
    }
  //   console.log(this.state.arrayIDtoDel);

  }
  deleteGroup()
   {
      this.state.arrayIDtoDel.map((idpost,index) =>
      {
        listPostsActions.delete(idpost);
      });
      listPostsActions.closeModal();
   }
   handlePreviouspage()
   {
    listPostsActions.previouspage();
    scroller.scrollTo('nav', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
   }
   handleNextpage(){
    listPostsActions.nextpage();
    scroller.scrollTo('nav', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
   }

  render() {
    let style={'text-align':'center'};
    let postviewed=this.state.currentpage*this.state.numpostview;
    if (postviewed>this.state.numpost)  postviewed=this.state.numpost;
    let postlist = this.state.posts.map((post, index) => {
      let checked=false;
      let startindex = (this.state.currentpage-1)*this.state.numpostview;
      let endindex = startindex + this.state.numpostview;
      if(index>=startindex && index<endindex)
      return (
        <tr key ={index}>
          <td>{index+1}</td>
          {/*<td><Link to={'/admin/post/'+post._id} title ={post.title}>{post.title.substr(0,20) +' ...'} </Link></td>*/}
          <td><Link to={'/'+post.link.substr(22)} title ={post.title}>{post.title.substr(0,20) +' ...'} </Link></td>
          <td>{post.introduce.substr(0,40)+' ...'}</td>
          <td>{moment(post.dateStart).format('DD-MM-YYYY HH:MM')}s</td>
          <td>{post.content.substr(0,40)+' ...' }</td>
          <td>{post.postCategory.nameCate}</td>
          <td><ActionBar viewAction={AddPostActions} editAction={AddPostActions} deleteAction={listPostsActions} item={post} /></td>
          <td>
            <input type ='checkbox' data-ref ={post._id} onClick = {this.handleChange.bind(this)} />
          </td>
        </tr>
      );
    });

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                List books
                <div className="pull-right clear-fix">                                    
                    <label>Hiển thị: </label>               
                    <select value={this.state.numpostview} onChange ={listPostsActions.updatenumpostView}>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                    </select>                               
                  </div> 
              </div>
              <div className='panel-body'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Chủ đề</th>
                      <th>Giới thiệu</th>
                      <th>Ngày bắt đầu</th>
                      <th>Nội dung</th>
                      <th>Danh mục</th>
                      <th>Hành động</th>
                      <th><a className ="deletegroup" onClick ={listPostsActions.openModal} > <i className="fa fa-trash fa-danger fa-fa2x"></i></a></th>
                    </tr>
                  </thead>
                  <tbody>
                    {postlist}
                  </tbody>
                </table>
              </div>
              <div className="panel-footer clearfix">   
                  <div className="pull-left">             
                    <label>{"Hiển thị "+ postviewed +"/"+this.state.numpost +" bài viết" }</label>
                  </div>

                  <Element  name="nav" className="pull-right">             
                    <button className="btn btn-default"
                    onClick={this.handlePreviouspage.bind(this)}><i className="fa fa-arrow-left"></i></button>
                    <button className="btn btn-info">{this.state.currentpage}</button>                                   
                    <button className="btn btn-default"
                    onClick={this.handleNextpage.bind(this)}><i className="fa fa-arrow-right"></i></button>                   
                  </Element >
              </div>
            </div>
          </div>
        </div>
        <Modal style ={style} show={this.state.modalIsOpen} onHide ={listPostsActions.closeModal}>
          <Modal.Header>
            <Modal.Title style={style}>
            <i className="fa fa-check-square-o fa-2x"></i>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div style={style}>
          <h3 style ={{'color':'green'}}>Đồng ý xóa ?</h3>
          </div>
          </Modal.Body>
          <Modal.Footer>
              <button
                  className="btn btn-warning"
                onClick={listPostsActions.closeModal}><i className="fa fa-times"> Hủy bỏ</i> </button>
              <button
                  className="btn btn-success"
                onClick={this.deleteGroup.bind(this)}><i className="fa fa-check"> Xóa</i> </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ListBooks;
