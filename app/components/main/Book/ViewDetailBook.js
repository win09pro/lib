import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';

import BookAction from '../../../actions/main/book/BookAction';
import BookStore from '../../../stores/main/book/BookStore';
import CategoryListStore from '../../../stores/admin/category/CategoryListStore';
import CategoryListAction from '../../../actions/admin/category/CategoryListAction';
import Login from '../Login/Login';
import LoginActions from '../../../actions/main/Login/LoginActions';
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
    	BookAction.getRelatedBook(this.props.params.id);
    	BookAction.getBookNew();
    	BookAction.getComment(this.props.params.id);
    	CategoryListAction.get();
    }
    componentWillUnmount(){
    	BookStore.unlisten(this.onChange);
    	CategoryListStore.unlisten(this.onChange);
    }
    onChange(state) {
    	this.setState({state1:BookStore.getState(), state2:CategoryListStore.getState()});
		if(this.state.state1.showAlert=="Error")
			{
				this.refs.AAA.warning('Sách đã được đặt trước, cảm ơn bạn', 'Thông báo', {
				closeButton: true,
				});      
			}
		else if(this.state.state1.showAlert=="Success"){
			this.refs.AAA.success('Bạn đã mượn sách thành công. Vào trang cá nhân để xem chi tiết!', 'Mượn sách', {
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
	addComment(bookId){
		var userId = localStorage.getItem('userid');
		var bookId = bookId;
		var content = this.state.state1.commentContent;
		if(content.length == 0){
			BookAction.invalidComment();
			this.refs.CommentTextField.focus();
		}
		else if(!userId){
			LoginActions.openLoginModal();
		}
		else{
			var date = new Date();
			
			BookAction.addComment({bookId:bookId, userId: userId, content:content, date: date});
		}
	}
	handleFind(event){
		var textFind = this.state.state1.textFind;
		if(textFind.length == 0){
			this.context.router.push('/tat-ca-sach');
		}
		else{
			this.context.router.push('/tim-kiem/'+textFind);
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
    	let booknews = this.state.state1.booknews.map((booknew, index) =>{
    		return(
    			<li>
					<div className="new-arrival">
						<div className="lib-thumb">
							<a href={"/chi-tiet-sach/"+booknew._id}>
								<img className="img-resposive" src={booknew.imageUrl} alt={booknew.name}/>
							</a>
						</div>
						<div className="lib-text">
							<h3><a href={"/chi-tiet-sach/"+booknew._id}>{booknew.name}</a></h3>
							<p>{booknew.description.substr(0, 50)+' ...'}</p>
						</div>
					</div>
				</li>
    			);
    	});
    	let relatedbooks = this.state.state1.relatedbooks.map((relatedbook, index) => {
    		return(
    			<div className="col-md-4 col-sm-6">
					<div className="related-book">
						<figure>
							<img className="img-resposive" src={relatedbook.imageUrl} alt={relatedbook.name}/>
						</figure>
						<div className="lib-text">
							<h3>
								<a href={"/chi-tiet-sach/"+relatedbook._id}>{relatedbook.name}</a>
							</h3>
						</div>
					</div>
				</div>
    			);
    	});

    	var book = this.state.state1.detailBook;

    	let comments = this.state.state1.comments.map((comment, index) =>{
    		return(
    			<li>
					<div className="lib-thumb">
						<a href="#">
							<img className="img-resposive" src={comment._userId.avatar} alt={comment._userId.name.first}/>
						</a>
					</div>
					<div className="lib-text">
						<h4>{comment._userId.name.first +' '+ comment._userId.name.last}</h4><span><p className="date">{comment.date.substr(0,10)}</p></span>
						
						<p>{comment.content}</p>
					</div>
				</li>
    			);
    	});
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
										<form method="POST" action="" onSubmit={this.handleFind.bind(this)}>
											<input type="text" placeholder="Tên sách, tác giả, nhà xuất bản" value={this.state.state1.textFind} onChange={BookAction.updateTextFind}/>
											<i className="fa fa-search"></i>
										</form>
									</div>
								</div>
								{/*<!-- widget search end -->*/}

								{/*<!-- widget new arrival start -->*/}
								<div className="widget widget-new-arrival">
									<h2>Sách mới</h2>
									<ul>
										{booknews}
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
													<p>Danh mục: {this.state.state1.cate.name}</p>
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
												<div>
													<h4>Gửi đánh giá</h4>
													<textarea rows="4" cols="100" maxLength="400" ref='CommentTextField' value={this.state.state1.commentContent} className="comment" onChange={BookAction.updateCharCount}>
													</textarea>
													<br/>
													<span className='help-block'>{this.state.state1.helpBlockComment}</span>
													<span className="">Còn lại {this.state.state1.charcount}/400 ký tự</span>
													<button type="submit" className='btn btn-primary pull-right' onClick={this.addComment.bind(this, book._id)}>Gửi</button>
												</div>
												<ul>
													{comments}
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
										{relatedbooks}
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

ViewDetailBook.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ViewDetailBook;
