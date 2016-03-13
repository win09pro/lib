import React from 'react';
import {Link} from 'react-router';
// import SidebarLeftStore from '../../stores/SidebarLeftStore';
// import SidebarLeftActions from '../../actions/SidebarLeftActions';

class SidebarLeft extends React.Component {
  constructor(props) {
    super(props);
    //this.state = SidebarLeftStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    //SidebarLeftStore.listen(this.onChange);
  }
  componentWillUnmount() {
    //SidebarLeftStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  // handleSubmit(event) {
  //   event.preventDefault();

  //   let searchQuery = this.state.searchQuery.trim();

  //   if (searchQuery) {
  //     SidebarLeftActions.findCharacter({
  //       searchQuery: searchQuery,
  //       searchForm: this.refs.searchForm,
  //       history: this.props.history
  //     });
  //   }
  // }
  render(){
    return(
            <div className="col-xs-12 col-sm-12 col-md-12 sidebar-offcanvas" id="sidebar" role="navigation">
                <ul className="nav">
                  <li className="active"><Link to='/admin'>Home</Link></li>
                  <li><Link to='/category/listBooks'>Category</Link></li>
                  <li><Link to='/book-group'>Book Group</Link></li>
                  <li><Link to='/book'>Book</Link></li>              
                </ul>
            </div>
          );
}
}
export default SidebarLeft;