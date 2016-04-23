import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="main-body">	
        <Navbar/>
        <Header/>        
        <div className="library-content">
			 {this.props.children}
        </div>		
       <Footer/>
      </div>
    );
  }
}

export default App;
