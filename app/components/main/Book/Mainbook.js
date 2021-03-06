import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import BookAction from '../../../actions/main/book/BookAction';
import BookStore from '../../../stores/main/book/BookStore';
import Login from '../Login/Login';
import LoginActions from '../../../actions/main/Login/LoginActions';
import {
  ToastContainer,
  ToastMessage,
} from 'react-toastr';
import LocalStorage from 'localStorage';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
class MainBook extends React.Component {
  constructor(props) {
    super(props);    
    this.state = BookStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    BookStore.listen(this.onChange);
    BookAction.getBookHome();    
  }

  componentWillUnmount(){
      BookStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
       if(this.state.showAlert=="Error")
         {
           this.refs.AAA.warning('Sách đã được đặt trước, cảm ơn bạn!', 'Thông báo', {
              closeButton: true,
            });      
          }
         else if(this.state.showAlert=="Success"){
             this.refs.AAA.success('Bạn đã mượn sách thành công. Vào trang cá nhân để xem chi tiết!', 'Mượn sách', {
              closeButton: true,
            });         
         }
         else if(this.state.showAlert=="GreaterNum"){
           this.refs.AAA.info('Bạn đã đã đặt hoặc mượn đủ số lượng sách.', 'Thông báo', {
              closeButton: true,
            });  
         }
  }
  addToTransition(barcode,name){
    var username = localStorage.getItem('username');
    var barcode = barcode;
    var bookname = name;
    if(!username){
      LoginActions.openLoginModal();
    }
    else{
      var dateStart = new Date();
      var dateEnd = new Date();
      dateEnd.setDate(dateEnd.getDate() + 2);
      // console.log(date);
      BookAction.addTransition({barcode:barcode, bookname: bookname, username:username, dateStart: dateStart, dateEnd: dateEnd});      
    }
  }
  
  render() {   
    let listbook = this.state.bookhome.map((book, index) =>{
      if(index == 0){
      return(
        
          <li className="col-md-4 col-sm-6 active" role="presentation" key={index}>
            <a data-toggle="tab" href={"#book"+(index+1)} aria-expanded="true">
              <img className="img-responsive" src={book.imageUrl} alt={book.name} />
            </a>
          </li>
        );
      }
        else{
          return(
              <li className="col-md-4 col-sm-6" role="presentation" key={index}>
                <a data-toggle="tab" href={"#book"+(index+1)} aria-expanded="true">
                  <img className="img-responsive" src={book.imageUrl} alt={book.name} />
                </a>
              </li>
            );
        }
        
      
    });
    let listbooktab = this.state.bookhome.map((booktab, index) =>{
      if(index == 0){
        return(
          
              <div id={"book"+(index+1)} className="tab-pane fade in active" key={index}>
                <div className="col-md-6 col-sm-12">
                  <img className="img-responsive" src={booktab.imageUrl} alt />
                </div>
                <div className="col-md-6 col-sm-12 ">
                  <h3><a href={"/chi-tiet-sach/"+booktab._id}>{booktab.name}</a></h3>
                  <h5><i className="fa fa-pencil" /><i> {booktab.author}</i></h5>
                  <h5><i className="fa fa-barcode" /> {booktab.code}</h5>
                  <button type="button" className="btn btn-primary" name="button" onClick={this.addToTransition.bind(this,booktab.code,booktab.name)}>ĐẶT SÁCH</button>
                </div>
              </div>
            );
        }
        else{
          return(
            <div id={"book"+(index+1)} className="tab-pane fade" key={index}>
              <div className="col-md-6 col-sm-12">
                <img className="img-responsive" src={booktab.imageUrl} alt />
              </div>
              <div className="col-md-6 col-sm-12 ">
                <h3><a href={"/chi-tiet-sach/"+booktab._id}>{booktab.name}</a></h3>
                <h5><i className="fa fa-pencil" /><i> {booktab.author}</i></h5>
                <h5><i className="fa fa-barcode" /> {booktab.code}</h5>
                <button type="button" className="btn btn-primary" name="button" onClick={this.addToTransition.bind(this,booktab.code,booktab.name)}>ĐẶT SÁCH</button>
              </div>
            </div>
          );
        }
        
      
    });
    return (
        <div className="book-content">
        <div className="container-fluid">
          <div className="section-heading">
            <h2><i className="fa fa-book" /> TÀI LIỆU MỚI</h2>
            <div className="link-heading">
            <a href="/tat-ca-sach">Xem tất cả <i className="fa fa-angle-right" /></a>
            </div>
          </div>
          <div className="row">
            <ul className="nav nav-tabs col-sm-12" role="tablist">
              {listbook}
              {/*// <li className="col-md-4 col-sm-6 active" role="presentation">
              //   <a data-toggle="tab" href="#home" aria-expanded="true">
              //     <img className="img-responsive" src="http://bilder.buecher.de/produkte/37/37354/37354352z.jpg" alt />
              //   </a>
              // </li>
              // <li className="col-md-4 col-sm-6" role="presentation">
              //   <a data-toggle="tab" href="#menu1" aria-expanded="true">
              //     <img src="http://bilder.buecher.de/produkte/37/37354/37354352z.jpg" alt />
              //   </a>
              // </li>
              // <li className="col-md-4 col-sm-6" role="presentation">
              //   <a data-toggle="tab" href="#menu2" aria-expanded="true">
              //     <img src="https://lh3.googleusercontent.com/-45bNiehlDe0/VhJImsB7V9I/AAAAAAAAx9Q/Ew6NpAEcsH8/s512-Ic42/wpViewImagePatron.jpg" alt />
              //   </a>
              // </li>
              // <li className="col-md-4 col-sm-6" role="presentation">
              //   <a data-toggle="tab" href="#menu3" aria-expanded="true">
              //     <img src="http://billhuy.com/wp-content/uploads/2016/03/Economy-Toeic-LC-1000-Vol-2.jpg" alt />
              //   </a>
              // </li>
              // <li className="col-md-4 col-sm-6" role="presentation">
              //   <a data-toggle="tab" href="#menu3" aria-expanded="true">
              //     <img src="http://static.waka.vn/view/ebook/0/0/2/2439.jpg?v=10&h=336&w=5000" alt />
              //   </a>
              // </li>
              // <li className="col-md-4 col-sm-6" role="presentation">
              //   <a data-toggle="tab" href="#menu3" aria-expanded="true">
              //     <img src="http://kodeforest.net/html/books/library/images/papular-books2.png" alt />
              //   </a>
              // </li>*/}
            </ul>
            <div className="tab-content col-sm-12">
              <ToastContainer ref='AAA' toastMessageFactory={ToastMessageFactory} className="toast-top-right"/>
              {listbooktab}
              {/*<div id="home" className="tab-pane fade in active">
                <div className="col-md-6 col-sm-12">
                  <img className="img-responsive" src="https://lh3.googleusercontent.com/-45bNiehlDe0/VhJImsB7V9I/AAAAAAAAx9Q/Ew6NpAEcsH8/s512-Ic42/wpViewImagePatron.jpg" alt />
                </div>
                <div className="col-md-6 col-sm-12 ">
                  <h3>Document software Architecture</h3>
                  <h5><i className="fa fa-pencil" /><i> Pau Clement</i></h5>
                  <h5><i className="fa fa-barcode" /> 27195102</h5>
                  <button type="button" className="btn btn-primary" name="button">ĐẶT SÁCH</button>
                </div>
              </div>
              <div id="menu1" className="tab-pane fade">
                <div className="col-md-6 col-sm-12">
                  <img className="img-responsive" src="http://billhuy.com/wp-content/uploads/2016/03/Economy-Toeic-LC-1000-Vol-2.jpg" alt />
                </div>
                <div className="col-md-6 col-sm-12 ">
                  <h3>Document software Architecture</h3>
                  <h5><i className="fa fa-pencil" /><i> Pau Clement</i></h5>
                  <h5><i className="fa fa-barcode" /> 27195102</h5>
                  <button type="button" className="btn btn-primary" name="button">ĐẶT SÁCH</button>
                </div>
              </div>
              <div id="menu2" className="tab-pane fade">
                <div className="col-md-6 col-sm-12">
                  <img className="img-responsive" src="http://static.waka.vn/view/ebook/0/0/2/2439.jpg?v=10&h=336&w=5000" alt />
                </div>
                <div className="col-md-6 col-sm-12 ">
                  <h3>Document software Architecture</h3>
                  <h5><i className="fa fa-pencil" /><i> Pau Clement</i></h5>
                  <h5><i className="fa fa-barcode" /> 27195102</h5>
                  <button type="button" className="btn btn-primary" name="button">ĐẶT SÁCH</button>
                </div>
              </div>
              <div id="menu3" className="tab-pane fade">
               <div className="col-md-6 col-sm-12">
                  <img className="img-responsive" src="http://kodeforest.net/html/books/library/images/papular-books2.png" alt />
                </div>
                <div className="col-md-6 col-sm-12 ">
                  <h3>Document software Architecture</h3>
                  <h5><i className="fa fa-pencil" /><i> Pau Clement</i></h5>
                  <h5><i className="fa fa-barcode" /> 27195102</h5>
                  <button type="button" className="btn btn-primary" name="button">ĐẶT SÁCH</button>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBook;