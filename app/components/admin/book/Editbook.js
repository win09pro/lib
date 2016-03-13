import React from 'react';
import listBooksStore from '../stores/listBooksStore';
import listBooksActions from '../actions/listBooksActions';
import ActionBar from '../shared/ActionBar';
import Addbook from './Addbook';
import AddBookAction from '../actions/AddBookAction';
import AddBookStore from '../stores/AddBookStore';
import bookActions from '../actions/bookActions';
import Listbooks from './Listbooks';

class Editbook extends React.Component { 
  constructor(props)
  {
    super(props);
    this.state = AddBookStore.getState();
    this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {   
    AddBookAction.getBook(this.props.params.id);
    AddBookStore.listen(this.onChange); 
  
  }

  componentWillUnmount() {
    AddBookStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  } 
  
  render() {
    return (
    <Listbooks />    
    );
  }
}
export default Editbook;