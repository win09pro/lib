import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbartop from './Navbartop';
import SidebarLeft from './SidebarLeft';
class App extends React.Component {
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

export default App;