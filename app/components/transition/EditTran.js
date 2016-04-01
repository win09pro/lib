import React from 'react';
import listTransStore from '../../stores/transition/listTransStore';
import listTransActions from '../../actions/transition/listTransActions';
import TranActionBar from '../../shared/TranActionBar';
import AddTran from './AddTran';
import AddTranAction from '../../actions/transition/AddTranAction';
import AddTranStore from '../../stores/transition/AddTranStore';
import ViewTranAction from '../../actions/transition/ViewTranAction';
import ListTrans from './ListTrans';

class EditTran extends React.Component { 
  constructor(props)
  {
    super(props);
    this.state = AddTranStore.getState();
    this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {   
    AddTranAction.getTranId(this.props.params.id);
    AddTranStore.listen(this.onChange); 
  
  }

  componentWillUnmount() {
    AddTranStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  } 
  
  render() {
    return (
    <ListTrans />    
    );
  }
}
export default EditTran;