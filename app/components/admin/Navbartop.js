import React from 'react';
import {Link} from 'react-router';
import NavbartopStore from '../../stores/NavbartopStore';
import NavbartopActions from '../../actions/NavbartopActions';
import AddBookAction from '../../actions/AddBookAction';

class Navbartop extends React.Component {
	constructor(props) {
		super(props);
		this.state = NavbartopStore.getState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		NavbartopStore.listen(this.onChange);
	}
	componentWillUnmount() {
		NavbartopStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}
	handleSubmit(event) {
		event.preventDefault();

		let searchQuery = this.state.searchQuery.trim();

		if (searchQuery) {
			NavbartopActions.findCharacter({
				searchQuery: searchQuery,
				searchForm: this.refs.searchForm,
				history: this.props.history
			});
		}
	}
	render(){
		return(
			
			<div className="navbar navbar-default navbar-fixed-top" role="navigation">
		       <div className="container-fluid">
		    	<div className="navbar-header">
		           <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target="#navbar">
		             <span class="icon-bar"></span>
		             <span class="icon-bar"></span>
		             <span class="icon-bar"></span>
		           </button>
					<Link to='/admin' className='navbar-brand'>
						<span ref='triangles' className={'triangles animated ' + this.state.ajaxAnimationClass}>
						<div className='tri invert'></div>
						<div className='tri invert'></div>
						<div className='tri'></div>
						<div className='tri invert'></div>
						<div className='tri invert'></div>
						<div className='tri'></div>
						<div className='tri invert'></div>
						<div className='tri'></div>
						<div className='tri invert'></div>
						</span>
						BKLibary
					</Link>
				</div>
				<div id='navbar' className='navbar-collapse collapse'>
					<form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit.bind(this)}>
						<div className='input-group'>
						<input type='text' className='form-control' placeholder="Search" value={this.state.searchQuery} onChange={NavbartopActions.updateSearchQuery} />
						<span className='input-group-btn'>
						<button className='btn btn-default' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
						</span>
						</div>
					</form>
					<ul className='nav navbar-nav'>
						<li><Link to='/admin'>Home</Link></li>            
						<li><Link to='/category/listBooks' onClick={AddBookAction.resetState()}>Listbook</Link></li>        
						<li><Link to='/admin/user/view'>User</Link></li>              
					</ul>
				</div>
			</div>
			</div>
			);
}
}
export default Navbartop;