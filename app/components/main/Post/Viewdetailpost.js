import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import PostActions from '../../../actions/main/post/PostActions';
import Poststore from '../../../stores/main/post/Poststore';
import moment from 'moment';
import HtmlToReact from 'html-to-react';
class Viewdetailpost extends React.Component {
  constructor(props) {
    super(props);       
    this.state = Poststore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {  
    Poststore.listen(this.onChange);
    PostActions.getpostbyLink(this.props.params.link);   
  }
  componentWillUnmount() {
    Poststore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  
  render() {    
    var introduce = '<div>' + this.state.detailpost.introduce +'</div>';
    var content ='<div>' + this.state.detailpost.content +'</div>';
    var htmlToReactParser = new HtmlToReact.Parser(React);
    var reactIntroduce = htmlToReactParser.parse(introduce);
    var reactcontent = htmlToReactParser.parse(content);  
     let Type = function (num) {
       switch (num) {
        case 1:
           return 'Giới thiệu';
           break;
        case 2:
           return 'Dịch vụ';
           break;
        case 3:
           return 'Trợ giúp';
           break;
        case 4:
           return 'Tin tức';
           break;
       }
    }
    let relativepost = this.state.relativeposts.map((relativepost,index) =>
    {
      return(
         <div className="col-md-3 col-sm-6">
              <div className="list-postnews-relative">
                <a href={relativepost.link}><button type="button" className="btn btn-primary" name="button"> Xem thêm</button></a>
                <img src={relativepost.pictureURL} alt />
                <div className="postnews-relative-content">
                  <p>{relativepost.title}</p>
                </div>
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
              <li><Link to='http://localhost:3000/post/listall'>{Type(this.state.detailpostCategory.Type)}</Link></li>
              <li className="active">{this.state.detailpostCategory.nameCate}</li>
            </ol>
          </div>
        </div>
        <div className="postnews-content">
          <div className="postnews-title">
            <h1>{this.state.detailpost.title}</h1>
            <div className="postnews-time">
              <span><i className="fa fa-clock-o fa-1.5x" aria-hidden="true" /> 
              {moment(this.state.detailpost.dateStart).format('DD/MM/YYYY HH:MM')}</span>            
            </div>
          </div>
          <div className ='postnews-introduce'>
          {reactIntroduce}
          </div>      
          <div className ='postnews-content-content'>
          {reactcontent}   
          </div>       
        </div>        
        <div className="postnews-relative">
        <div className="postnews-relative-title">
          <h1>Tin tức liên quan</h1>
          <div className="row">     
            {relativepost} 
          </div>         
        </div>
      </div>
      </div>

    );
  }
}

export default Viewdetailpost;