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
  componentDidUpdate()
  {
    $('.postslider').bxSlider({
          slideWidth: 325,
            minSlides: 2,
            maxSlides: 4,
            slideMargin: 10,
            pager: false,
            caption:true,
          auto: true,
          moveSlides: 1,
          speed: 1000
          });
  }
  onChange(state) {
    this.setState(state);
  }
  
  render() { 
    return (
      <div className="news-content">
        <div className="container-fluid">
          <div className="section-heading">
            <h2><i className="fa fa-newspaper-o" /> TIN TỨC</h2>
            <div className="link-heading">
            <Link to="/tin-tuc/tat-ca-tin-tuc">Xem tất cả <i className="fa fa-angle-right" /></Link>
            </div>
          </div> 
             <ul className="postslider">            
                {this.state.posts.map((newestPost,index) =>
                  {    
                    return(
                      <li key={index}>
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
                      </li>
                      );
                  }) 
                  } 
            </ul>
        </div>
      </div>     
    );
  }
}

export default Mainpost;