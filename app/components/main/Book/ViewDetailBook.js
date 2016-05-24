import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';

import BookAction from '../../../actions/main/book/BookAction';
import BookStore from '../../../stores/main/book/BookStore';

class ViewDetailBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = BookStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
    	BookStore.listen(this.onChange);
    	BookAction.getDetailBook(this.props.params.id);
    }
    componentWillUnmount(){
    	BookStore.unlisten(this.onChange);
    }
    onChange(state) {
    	this.setState(state);
  	}
    render() {
    	var book = this.state.detailBook;
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
								{/*<!-- widget new arrival end -->*/}

								{/*<!-- widget categories start -->*/}
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
								{/* widget categories end */}

							</div>
							<div className="col-md-9">
								{/* Book detail start */}
								<div className="lib-book-detail">
									<ol className="breadcrumb page-breadcrumb pull-left">
						              <li><i className="fa fa-home" /><a href="/"> Trang chủ</a></li> 
						              <li><i className="" /><a href="/allbook"> Sách</a></li>            
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
													<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
												</div>
												<div className="book-text">
													<p>Danh mục: {this.state.cate.name}.</p>
													<p>Tác giả: {book.author}</p>
													<p>Nhà xuất bản: {book.publisher}</p>
												</div>
												<a href="#" className="borrow">Đặt Mượn</a>
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
																<img className="img-resposive" src="http://kodeforest.net/html/books/library/images/author14.png" alt=""/>
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
																<img className="img-resposive" src="http://kodeforest.net/html/books/library/images/author14.png" alt=""/>
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
													<img className="img-resposive" src="http://kodeforest.net/html/books/library/images/book7.png" alt=""/>
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
													<img className="img-resposive" src="http://kodeforest.net/html/books/library/images/book8.png" alt=""/>
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
													<img className="img-resposive" src="http://kodeforest.net/html/books/library/images/book10.png" alt=""/>
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
