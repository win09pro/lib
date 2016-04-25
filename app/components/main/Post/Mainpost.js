import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import PostActions from '../../../actions/main/post/PostActions';
import Poststore from '../../../stores/main/post/Poststore';
import moment from 'moment';
class Mainpost extends React.Component {
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
    var newestPosts = this.state.posts;   
    let viewnewestpost = newestPosts.map((newestPost,index) =>
    {    
      return(
        <div className="col-md-3 col-sm-6">
              <div className="library-news">  
                <img className="img-responsive" src={newestPost.pictureURL} alt="new" />
                <div className="library-btn">
                  <Link to={newestPost.link}><i className="fa fa-search" /> Chi tiết</Link>                 
                </div>
                <div className="title-news">
                  <h3>{newestPost.title}</h3>
                  <h4>{newestPost.introduce.substr(0,80)+' ...'}</h4>
                  <div className='title-news-time'>
                  <span><i className="fa fa-calendar"/> {moment(newestPost.dateStart).format('DD-MM-YYYY H:MM')}</span>
                  </div>
                </div>
              </div>
        </div>
        );
    });
    return (
      <div className="news-content">
        <div className="container-fluid">
          <div className="section-heading">
            <h2><i className="fa fa-newspaper-o" /> TIN TỨC</h2>
            <div className="link-heading">
            <a href="/post/listall">Xem tất cả <i className="fa fa-angle-right" /></a>
            </div>
          </div>
          <div className="row">
          {viewnewestpost}
          </div>
        </div>
      </div>     
    );
  }
}

export default Mainpost;