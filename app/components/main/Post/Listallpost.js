import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import PostActions from '../../../actions/main/post/PostActions';
import Poststore from '../../../stores/main/post/Poststore';
import moment from 'moment';
class Listallpost extends React.Component {
  constructor(props) {
    super(props);    
    this.state = Poststore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {  
    Poststore.listen(this.onChange);
    PostActions.get();
  }
  componentWillUnmount() {
    Poststore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  
  render() { 
    var listPosts = this.state.posts;   
    let vieweachpost = listPosts.map((post,index) =>
    {
      return(
        <div className="listpost-view">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="listpost-picture">
                <img src={post.pictureURL} alt="postpicture" />
              </div>
            </div>
            <div className="col-md-9 col-sm-6">
              <div className="listpost-title">               
                <h1><b>{post.title}</b></h1>
              </div>
              <div className="postnews-time">
                <span><i className="fa fa-clock-o fa-1x" aria-hidden="true" /></span>
                {moment(post.dateStart).format('HH:MM')}
                <span>{" " + moment(post.dateStart).format('DD-MM-YYYY')}</span>
              </div>
              <div className="listpost-intro">
                {post.introduce}
              </div>
              <div className='pull-right'>
              <a href ={post.link} className='btn btn-primary'>Chi tiết <span><i className="fa fa-search-plus" aria-hidden="true" /></span></a>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </div>       
        );
    });
    return (
      <div className="container">
        <div className="postnews">
          <div className="postnews-header">
            <ol className="breadcrumb page-breadcrumb pull-left">
              <li><i className="fa fa-home" /><a href="/"> Trang chủ</a></li>          
              <li className="active">Tin tức</li>
            </ol>
          </div>
        </div>
        <div className="postnews-content">
        <div className="postnews-title">
          <h1>Tin tức mới nhất</h1>
        </div>
        {vieweachpost}
      </div>
      </div>  
    );
  }
}

export default Listallpost;