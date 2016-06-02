import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';

import BookAction from '../../../actions/main/book/BookAction';
import BookStore from '../../../stores/main/book/BookStore';
import CategoryListStore from '../../../stores/admin/category/CategoryListStore';
import CategoryListAction from '../../../actions/admin/category/CategoryListAction';
import {
  ToastContainer,
  ToastMessage,
} from 'react-toastr';
import LocalStorage from 'localStorage';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
class ViewDetailBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {state1:BookStore.getState(), state2:CategoryListStore.getState()};
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
    	BookStore.listen(this.onChange);
    	CategoryListStore.listen(this.onChange);
    	BookAction.getDetailBook(this.props.params.id);
    	CategoryListAction.get();
    }
    componentWillUnmount(){
    	BookStore.unlisten(this.onChange);
    	CategoryListStore.unlisten(this.onChange);
    }
    onChange(state) {
    	this.setState({state1:BookStore.getState(), state2:CategoryListStore.getState()});
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
			this.refs.AAA.success('Bạn đã mượn sách '+name+ ' thành công. Vào trang cá nhân để xem chi tiết!', 'Mượn sách', {
		      closeButton: true,
		    });	 
		}
	}
    render() {
    	let listcate = this.state.state2.listcategory.map((cate, index) => {
    		return(
    			<li>
					<a href={"/danh-muc/"+cate.name}>{cate.name}</a>
				</li>
    		);
    	});

    	var book = this.state.state1.detailBook;

    	return(
	        <div className="container-fluid padding-0">
				<div className="wrap-detail-content">
					<div className="container">	
						<div className="row">
							<div className="col-md-3 sidebar">
								{/*<!-- widget search start -->*/}
								<div className="widget widget-search">
									<h2 className="mar-0">Tìm kiếm</h2>
									<div className="input-container">
										<form method="POST" action="">
											<input type="text" placeholder="Nhập từ khóa"/>
											<i className="fa fa-search"></i>
										</form>
									</div>
								</div>
								{/*<!-- widget search end -->*/}

								{/*<!-- widget new arrival start -->*/}
								<div className="widget widget-new-arrival">
									<h2>Sách mới</h2>
									<ul>
										<li>
											<div className="new-arrival">
												<div className="lib-thumb">
													<a href="#">
														<img className="img-resposive" src="/img/img1.jpg" alt="Don Quixote"/>
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
														<img className="img-resposive" src="/img/img2.jpg" alt="Don Quixote"/>
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
														<img className="img-resposive" src="/img/img1.jpg" alt="Don Quixote"/>
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
								{/*<!-- widget new arrival end -->*/}

								{/*<!-- widget categories start -->*/}
								<div className="widget widget-category">
									<h2>Danh mục</h2>
									<ul>
										{listcate}
									</ul>

								</div>
								{/* widget categories end */}

							</div>
							<div className="col-md-9">
								{/* Book detail start */}
								<ToastContainer ref='AAA' toastMessageFactory={ToastMessageFactory} className="toast-top-right"/>
								<div className="lib-book-detail">
									<ol className="breadcrumb page-breadcrumb pull-left">
						              <li><i className="fa fa-home" /><a href="/"> Trang chủ</a></li> 

						              <li><a href={"/the-loai/"+this.state.state1.documenttype.name}>{this.state.state1.documenttype.name}</a></li>  
						              <li><a href={"/danh-muc/"+this.state.state1.cate.name}>{this.state.state1.cate.name}</a></li>          
						             {/* <li><i className="" /><a href={"/danh-muc/"+book._cateId.name}>{book._cateId.name}</a></li> */}
						              <li className="active">{book.name}</li>
						            </ol>
						            <div className="clearfix"></div>
									<div className="row">
										
										<div className="col-md-5">
											<div className="lib-thumb">
												<img className="img-resposive" src={book.imageUrl} alt={book.name}/>
											</div>
										</div>
										<div className="col-md-7">
											<div className="lib-text">
												<h2>{book.name}</h2>
												<div className="book-text">
													
												</div>
												<div className="book-text">
													<p>Danh mục: {this.state.state1.cate.name}.</p>
													<p>Tác giả: {book.author}</p>
													<p>Nhà xuất bản: {book.publisher}</p>
												</div>
												<button type="submit" className="borrow" onClick={this.addToTransition.bind(this,book.code,book.name)}>Đặt Mượn</button>
												<div className="rating">
	                                        		<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
	                                    		</div>
											</div>
										</div>
									</div>
								</div>
								{/* book detail end */}

								{/* product preview tabs start */}
								<div className="product-review-tabs">
									{/*<!-- nav tab -->*/}
									<ul className="nav nav-tabs" role="tablist">
										<li role="presentation" className="active">
											<a href="#description" role="tab" data-toggle="tab">Mô tả</a>
										</li>
										<li role="presentation">
											<a href="#reviews" role="tab" data-toggle="tab">Đánh giá</a>
										</li>
									</ul>
									{/* nav tab end */}

									{/* tab panel start */}
									<div className="tab-content">
										<div role="tabpanel" className="tab-pane fade in active" id="description">
											<p>{book.description}</p>
										</div>
										<div role="tabpanel" className="tab-pane fade" id="reviews">
											<div className="lib-comments">
												<ul>
													<li>
														<div className="lib-thumb">
															<a href="#">
																<img className="img-resposive" src="/img/img4.jpg" alt=""/>
															</a>
														</div>
														<div className="lib-text">
															<h4>Trung Quân</h4>
															<p className="date">April 15,2016</p>
															<p>Sách này hay...</p>
														</div>
													</li>
													<li>
														<div className="lib-thumb">
															<a href="#">
																<img className="img-resposive" src="/img/img4.jpg" alt=""/>
															</a>
														</div>
														<div className="lib-text">
															<h4>Trung Quân</h4>
															<p className="date">April 15,2016</p>
															<p>Sách này hay...</p>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
									{/* tab panel end */}
			
								</div>
								{/* product review tab end */}

								
								<div className="lib-related-book">
									<h2>Sách liên quan</h2>
									<div className="row row-related-book">
										<div className="col-md-4 col-sm-6">
											<div className="related-book">
												<figure>
													<img className="img-resposive" src="/img/img1.jpg" alt=""/>
												</figure>
												<div className="lib-text">
													<h3>
														<a href="#">Magic</a>
													</h3>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="related-book">
												<figure>
													<img className="img-resposive" src="/img/img2.jpg" alt=""/>
												</figure>
												<div className="lib-text">
													<h3>
														<a href="#">Magic</a>
													</h3>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="related-book">
												<figure>
													<img className="img-resposive" src="/img/img3.jpg" alt=""/>
												</figure>
												<div className="lib-text">
													<h3>
														<a href="#">Magic</a>
													</h3>
												</div>
											</div>
										</div>
									</div>
								</div>	
								

							</div>
						</div>
					</div>

				</div>
			</div>
		);
    }
}

export default ViewDetailBook;
