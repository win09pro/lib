import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbar1 from './Navbar1';
import SidebarLeft from './SidebarLeft';
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
	      	    <div className="content-wrapper">
				{this.props.children}

			<Footer />
      </div>
      </div>

    );
  }
}

export default App;