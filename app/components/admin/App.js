import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';
import SidebarLeft from './SidebarLeft';
import localStorage from 'localStorage';
class App extends React.Component {
  constructor(props)
  {
    super(props);   
    this.onChange = this.onChange.bind(this);
  }
   componentDidMount() {    
   	  if (!localStorage.getItem('adminusername'))
  	{
    	this.context.router.push('/admin/login');
    } 	 
  }
  componentWillUnmount() {   
  }
  onChange(state) {
    this.setState(state);
  } 
  render() { 
  
    return (    
      <div className="wrapper">
	      	<Navbar />
	      	<SidebarLeft />
	      	    <div className="content-wrapper">
				{this.props.children}
			     </div>
			<Footer />
      </div>

    );
  }
}
App.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default App;
