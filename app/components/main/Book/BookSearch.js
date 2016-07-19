import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import Login from '../Login/Login';
import LoginActions from '../../../actions/main/Login/LoginActions';
import {
  ToastContainer,
  ToastMessage,
} from 'react-toastr';
import LocalStorage from 'localStorage';

import BookAction from '../../../actions/main/book/BookAction';
import BookStore from '../../../stores/main/book/BookStore';
import CategoryListStore from '../../../stores/admin/category/CategoryListStore';
import CategoryListAction from '../../../actions/admin/category/CategoryListAction';
import {Element,scroller}  from  'react-scroll'; 

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {state1:BookStore.getState(), state2:CategoryListStore.getState()};
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
    	BookStore.listen(this.onChange);
    	CategoryListStore.listen(this.onChange);
    	BookAction.searchText(this.props.params.text);
    	console.log(this.props.params.text);
    	BookAction.getBookNew();
    	CategoryListAction.get();
    	// console.log(BookAction.getListAllBook());
    }
    componentWillUnmount(){
    	BookStore.unlisten(this.onChange);
    	CategoryListStore.unlisten(this.onChange);
    }
    onStarClick(name, value) {
        this.setState({rating: value});
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
		 else if(this.state.state1.showAlert=="GreaterNum"){
           this.refs.AAA.info('Bạn đã đã đặt hoặc mượn đủ số lượng sách.', 'Thông báo', {
              closeButton: true,
            });  
         }
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
	handlePreviouspage()
	{  
		BookAction.previouspage();
		scroller.scrollTo('new', {
		  duration: 1500,
		  delay: 100,
		  smooth: true,
		});
	}
	handleNextpage(){
		BookAction.nextpage();
		scroller.scrollTo('new', {
		  duration: 1500,
		  delay: 100,
		  smooth: true,
		});
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
    	const { rating } = this.state.state1.rating;
    	let postviewed=this.state.state1.currentpage*this.state.state1.numpostview;
    	if (postviewed>this.state.state1.numpost)  postviewed=this.state.state1.numpost;

    	let listcate = this.state.state2.listcategory.map((cate, index) => {
    		return(
    			<li key={index}>
					<a href={"/danh-muc/"+cate.name}>{cate.name}</a>
				</li>
    		);
    	});
    	let booknews = this.state.state1.booknews.map((booknew, index) =>{
    		return(
    			<li key={index}>
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
        let listBookSearch = this.state.state1.listBookSearch.map((book, index) =>{
        	let startindex = (this.state.state1.currentpage-1)*this.state.state1.numpostview;
      		let endindex = startindex + this.state.state1.numpostview;
      		if(index>=startindex && index<endindex){
	        	return(
	        		<div className="col-md-4 col-sm-6" key={index}>
		        		<div className="books-listing">
							<div className="lib-thumb">
								<a href={"/chi-tiet-sach/"+book._id}>
									<img className='img-resposive' src={book.imageUrl} alt=''/>
								</a>
							</div>
							<div className="lib-text">
								<h3>
									<a href={"/chi-tiet-sach/"+book._id} data-toggle="tooltip" data-placement="bottom" title={book.name}>{book.name}</a>
									
								</h3>
							</div>
							<div className="book-footer">
								<button type="submit" className="borrow col-xs-12" onClick={this.addToTransition.bind(this,book.code,book.name)}>Đặt Mượn</button>
								<div className="rating col-xs-12">
		            				{/*<span><StarRatingComponent 
					                    name={"rate"+ (index+1)} 
					                    starCount={5}
					                    value={rating}
					                    onStarClick={this.onStarClick.bind(this)} />
					               	</span>*/}
		        				</div>
							</div>
						</div>
					</div>
	        	);
	        }
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
											<form method="POST" action="" onSubmit={this.handleFind.bind(this)}>
												<input type="text" placeholder="Tên sách, tác giả, nhà xuất bản" value={this.state.state1.textFind} onChange={BookAction.updateTextFind}/>
												<i className="fa fa-search"></i>
											</form>
										</div>
									</div>
									

									
									<div className="widget widget-new-arrival">
										<h2>Sách mới</h2>
										<ul>
											{booknews}
										</ul>
									</div>
									
									
									<div className="widget widget-category">
										<h2>Danh mục</h2>
										<ul>
											{listcate}
										</ul>

									</div>
									

								</div>
								<div className="col-md-9">
									<div className="row">
									<ToastContainer ref='AAA' toastMessageFactory={ToastMessageFactory} className="toast-top-right"/>
										<ol className="breadcrumb page-breadcrumb pull-left">
							              <li><i className="fa fa-home" /><a href="/"> Trang chủ</a></li>          
							              <li className="active">Tìm kiếm</li>
							            </ol>
										<div className="lib-related-book">
										<Element  name="new" className="">
								          	
								        </Element>
											<div className="row row-related-book">
												{listBookSearch}
											</div>
										</div>	
										
									</div>

									<div className="post-pagination clearfix">      
								        <Element  name="nav" className="pull-right">      
								            <label>{"Hiển thị "+ postviewed +"/"+this.state.state1.numpost +" sách" }</label>       
								            <button className="btn btn-default"
								            onClick={this.handlePreviouspage.bind(this)}><i className="fa fa-arrow-left"></i></button>
								            <button className="btn btn-info">{this.state.state1.currentpage}</button>                                   
								            <button className="btn btn-default"
								            onClick={this.handleNextpage.bind(this)}><i className="fa fa-arrow-right"></i></button>                   
								        </Element >
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

BookSearch.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default BookSearch;
