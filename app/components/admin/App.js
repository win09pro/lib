import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbartop from './Navbartop';
import SidebarLeft from './SidebarLeft';
class App extends React.Component {
  render() {
    return (
      <div className="page-container">
	      	<Navbar />
	      	<div className='clearfix'></div>
	      	<div className="container-fluid">
		      	<div className="row row-offcanvas row-offcanvas-left">
			      	<div className='col-md-3'>
				      	<SidebarLeft />
			      	</div>
			      	<div className="col-md-9" >
				        {this.props.children}
			      	</div>
			      	<div className='clearfix'></div>
		       </div>  
		   	</div>
		   	<br />
			<div className="container-fluid">
				<div className='row col-md-12'>
	      			<Footer />  
	      		</div>
	      	</div>
      </div>
    );
  }
}

export default App;