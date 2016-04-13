import React from 'react';
import ViewTranStore from '../../stores/transition/ViewTranStore';
import ViewTranAction from '../../actions/transition/ViewTranAction';
import TranActionBar from '../../shared/TranActionBar';


class Transition extends React.Component {
  constructor(props)
  {
  	super(props);
  	this.state = ViewTranStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {
    ViewTranStore.listen(this.onChange);
    ViewTranAction.getTran(this.props.params.id);
  }

  componentWillUnmount() {
    ViewTranStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  render() {  	
    return (    

      <div className='container'>
       <div className='row flipInX animated'>
       <div className='panel panel-default'>
              <div className='panel-heading'>VIEW</div>
                <div className='panel-body'>
                <label className='control-label'>BOOK ID</label>
                <p className='text-success'>{this.state.tran.bookId}</p>
                <label className='control-label'>BOOK NAME</label>
                <p className='text-success'>{this.state.tran.bookName}</p>
                <label className='control-label'>USER ID</label>
                <p className='text-success'> {this.state.tran.userId}</p>
                <label className='control-label'>USERNAME</label>
                <p className='text-success'> {this.state.tran.userName}</p>
               <label className='control-label'>DATE BORROW</label>
               <p className='text-success'> {this.state.tran.dateBorrow}</p>
               <label className='control-label'>DATE RETURN</label>
               <p className='text-success'> {this.state.tran.dateReturn}</p>
               <label className='control-label'>TIME BORROW</label>
               <p className='text-success'> {this.state.tran.timeBorrow}</p>
               </div>
       </div>
      </div>    
      </div>

    );
  }
}

export default Transition;