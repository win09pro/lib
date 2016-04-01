import React from 'react';
import AddTranAction from '../../actions/transition/AddTranAction'
import listTransStore from '../../stores/transition/listTransStore';
import listTransActions from '../../actions/transition/listTransActions';
import TranActionBar from '../../shared/TranActionBar';
import AddTran from './AddTran';
import ViewTranAction from '../../actions/transition/ViewTranAction';

class ListTrans extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = listTransStore.getState();
    this.onChange = this.onChange.bind(this);
  }
 componentDidMount() {
    listTransStore.listen(this.onChange);
    listTransActions.get();
  }

  componentWillUnmount() {
    listTransStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);   
  }
  
  render() {
    let tranList = this.state.trans.map((tran, index) => {
      return (
        <tr key ={index}>
          <td>{index+1}</td>
          <td>{tran.bookId}</td>
          <td>{tran.bookName}</td>
          <td>{tran.dateBorrow}</td>
          <td>{tran.dateReturn}</td>
          <td>{tran.timeBorrow}</td>
          <td><TranActionBar viewAction={ViewTranAction} editAction={AddTranAction} deleteAction={listTransActions} itemtran={tran} /></td>
        </tr>
      );
    });
    return (    
      <div className='container'>
        <div>
         <AddTran  />
        </div>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>List Transition</div>
              <div className='panel-body'>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>BOOK ID</th>
                      <th>BOOK Name</th>        
                      <th>DATE BORROW</th> 
                      <th>DATE RETURN</th>
                      <th>TIME BORROW</th>        
                      <th>FUNCTIONS</th>                                  
                    </tr>
                  </thead>
                  <tbody>                       
                    {tranList}
                  </tbody>
                       
                </table>       
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListTrans;