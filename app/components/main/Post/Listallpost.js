import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import PostActions from '../../../actions/main/post/PostActions';
import Poststore from '../../../stores/main/post/Poststore';
import moment from 'moment';
import {Element,scroller}  from  'react-scroll'; 
var nameCate='';
class Listallpost extends React.Component {
  constructor(props) {
    super(props);    
    this.state = Poststore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {  
    Poststore.listen(this.onChange);
   
    switch (this.props.params.namelink) {
      case 'dich-vu':
        nameCate="Dịch vụ";
        break;
      default:
        nameCate="Tin tức";
        break;
    }
    console.log(nameCate);
    PostActions.getAllposts(nameCate);
  }
  componentWillUnmount() {
    Poststore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  handlePreviouspage()
   {  
    PostActions.previouspage();
    scroller.scrollTo('titlepost', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
   }
   handleNextpage(){
    PostActions.nextpage();
    scroller.scrollTo('titlepost', {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
   }
  render() { 
    var allposts = this.state.allposts;   
    let postviewed=this.state.currentpage*this.state.numpostview;
    if (postviewed>this.state.numpost)  postviewed=this.state.numpost;
    let vieweachpost = allposts.map((post,index) =>
    {
      let startindex = (this.state.currentpage-1)*this.state.numpostview;
      let endindex = startindex + this.state.numpostview;
      if(index>=startindex && index<endindex){
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
              <Link to={post.link} className='btn btn-primary'>Chi tiết <span><i className="fa fa-search-plus" aria-hidden="true" /></span></Link>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </div>       
        );
    }});
    return (
      <div className="container">
        <div className="postnews">
          <div className="postnews-header">
            <ol className="breadcrumb page-breadcrumb pull-left">
              <li><i className="fa fa-home" /><a href="/"> Trang chủ</a></li>          
              <li className="active">{nameCate}</li>
            </ol>
          </div>
        </div>
        <div className="postnews-content">
        <Element  name="titlepost" className="postnews-title">
          <h1>{"Tất cả "+nameCate}</h1>
        </Element>
        {vieweachpost}
      </div>
      <div className="post-pagination clearfix">      
          <Element  name="nav" className="pull-right">      
            <label>{"Hiển thị "+ postviewed +"/"+this.state.numpost +" bài viết" }</label>       
            <button className="btn btn-default"
            onClick={this.handlePreviouspage.bind(this)}><i className="fa fa-arrow-left"></i></button>
            <button className="btn btn-info">{this.state.currentpage}</button>                                   
            <button className="btn btn-default"
            onClick={this.handleNextpage.bind(this)}><i className="fa fa-arrow-right"></i></button>                   
          </Element >
      </div>
      </div>  
    );
  }
}

export default Listallpost;