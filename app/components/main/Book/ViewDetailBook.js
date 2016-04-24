import React from 'react';
import {Link} from 'react-router';

class ViewDetailBook extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        return (
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
									
									<div className="lib-book-detail">
										<div className="row">
											<div className="col-md-5">
												<div className="lib-thumb">
													<img className="img-resposive" src="http://kodeforest.net/html/books/library/images/book-detail.jpg" alt=""/>
												</div>
											</div>
											<div className="col-md-7">
												<div className="lib-text">
													<h2>Application</h2>
													<div className="book-text">
														<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
													</div>
													<div className="book-text">
														<p>Danh mục: Books.</p>
														<p>Tác giả: Daniel</p>
														<p>Nhà xuất bản: Kim Đồng</p>
													</div>
													<a href="#" className="borrow">Đặt Mượn</a>
													<div className="rating">
		                                        		<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
		                                    		</div>
												</div>
											</div>
										</div>
									</div>
									

									
									<div className="product-review-tabs">
										
										<ul className="nav nav-tabs" role="tablist">
											<li role="presentation" className="active">
												<a href="#description" role="tab" data-toggle="tab">Mô tả</a>
											</li>
											<li role="presentation">
												<a href="#reviews" role="tab" data-toggle="tab">Đánh giá</a>
											</li>
										</ul>
										

										
										<div className="tab-content">
											<div role="tabpanel" className="tab-pane fade in active" id="description">
												<p>Cum altera mandamus in, mea verear disputationi et. Vel regione discere ut, legere expetenda ut eos. In nam nibh invenire similique. Atqui mollis ea his, ius graecis accommodare te. No eam tota nostrum cotidieque. Est cu nibh clita. Sed an nominavi maiestatis, et duo corrumpit constituto, duo id rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum ex minim legere.</p>
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
										
				
									</div>
									

									
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
