import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import Login from '../Login/Login';
import LoginActions from '../../../actions/main/Login/LoginActions';
import {
  ToastContainer,
  ToastMessage,
} from 'react-toastr';
import LocalStorage from 'localStorage';

import BookAction from '../../../actions/main/book/BookAction';
import BookStore from '../../../stores/main/book/BookStore';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);
class ListAllBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = BookStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
    	BookStore.listen(this.onChange);
    	BookAction.getListAllBook();
    	// console.log(BookAction.getListAllBook());
    }
    componentWillUnmount(){
    	BookStore.unlisten(this.onChange);
    }
    onChange(state) {
    	this.setState(state);
  	}
 //  	addAlert(id,name) {
 //  		console.log(id);
 //  		console.log(name);
	//     this.refs.AAA.success('Bạn đã mượn sách '+name+ 'thành công. Vào trang cá nhân để xem chi tiết!', 'Mượn sách', {
 //      closeButton: true,
 //    });	 
	// }

	clearAlert() {
	    this.refs.AAA.clear();
	}
	addToTransition(id,name){
		var idUser = localStorage.getItem('userid');
		var idBook = id;
		if(!idUser){
			LoginActions.openLoginModal();
		}
		else{
			var dateStart = new Date();
			var dateEnd = new Date();
			dateEnd.setDate(dateEnd.getDate() + 2);
			// console.log(date);
			BookAction.addTransition({idBook:idBook, idUser:idUser, dateStart: dateStart, dateEnd: dateEnd});
			this.refs.AAA.success('Bạn đã mượn sách '+name+ ' thành công. Vào trang cá nhân để xem chi tiết!', 'Mượn sách', {
		      closeButton: true,
		    });	 
		}
	}
    render() {
        let listbook = this.state.listallbook.map((book, index) =>{
        	return(
        		<div className="col-md-4 col-sm-6">
	        		<div className="books-listing">
						<div className="lib-thumb">
							<a href={"/book/"+book._id}>
								<img className='img-resposive' src={book.imageUrl} alt=''/>
							</a>
						</div>
						<div className="lib-text">
							<h3>
								<a href={"/book/"+book._id} >{book.name}</a>
								
							</h3>
						</div>
						<div className="book-footer">
							<a href="#" className="borrow col-xs-12" onClick={this.addToTransition.bind(this,book._id,book.name)}>Đặt Mượn</a>
							<div className="rating col-xs-12">
	            				<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
	        				</div>
						</div>
					</div>
				</div>
        	);
        });
        return(
        	
				<div className="container-fluid padding-0">
				

					<div className="wrap-detail-content">
						<div className="container">	
							<div className="row">
								<div className="col-md-3 sidebar">
									
									<div className="widget widget-search">
										<h2 className="mar-0">Tìm kiếm</h2>
										<div className="input-container">
											<form method="POST" action="">
												<input type="text" placeholder="Nhập từ khóa"/>
												<i className="fa fa-search"></i>
											</form>
										</div>
									</div>
									

									
									<div className="widget widget-new-arrival">
										<h2>Sách mới</h2>
										<ul>
											<li>
												<div className="new-arrival">
													<div className="lib-thumb">
														<a href="#">
															<img className="img-resposive" src="http://kodeforest.net/html/books/library/images/new-arrival1.png" alt="Don Quixote"/>
														</a>
													</div>
													<div className="lib-text">
														<h3>Don Quixote</h3>
														<p>Sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
													</div>
												</div>
											</li>
											<li>
												<div className="new-arrival">
													<div className="lib-thumb">
														<a href="#">
															<img className="img-resposive" src="http://kodeforest.net/html/books/library/images/new-arrival1.png" alt="Don Quixote"/>
														</a>
													</div>
													<div className="lib-text">
														<h3>Don Quixote</h3>
														<p>Sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
													</div>
												</div>
											</li>
											<li>
												<div className="new-arrival">
													<div className="lib-thumb">
														<a href="#">
															<img className="img-resposive" src="http://kodeforest.net/html/books/library/images/new-arrival1.png" alt="Don Quixote"/>
														</a>
													</div>
													<div className="lib-text">
														<h3>Don Quixote</h3>
														<p>Sed diam nonumy eirmod tempor invidunt ut labore et dolore</p>
													</div>
												</div>
											</li>
										</ul>
									</div>
									
									
									<div className="widget widget-category">
										<h2>Danh mục</h2>
										<ul>
											<li>
												<a href="#">Khoa học</a>
											</li>
											<li>
												<a href="#">Chính trị</a>
											</li>
											<li>
												<a href="#">Văn học</a>
											</li>
											<li>
												<a href="#">Xã hội</a>
											</li>
											<li>
												<a href="#">Tâm lý</a>
											</li>
										</ul>

									</div>
									

								</div>
								<div className="col-md-9">
									<div className="row">
									<ToastContainer ref='AAA' toastMessageFactory={ToastMessageFactory} className="toast-top-right"/>
										<ol className="breadcrumb page-breadcrumb pull-left">
							              <li><i className="fa fa-home" /><a href="/"> Trang chủ</a></li>          
							              <li className="active">Tất cả sách</li>
							            </ol>
										<div className="lib-related-book">
											<div className="row row-related-book">
												{listbook}
											</div>
										</div>	
										
									</div>

									
								</div>
							</div>
						</div>

					</div>
					<Login />   
				</div>
			
        );
    }
}

export default ListAllBook;
