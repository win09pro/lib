import React from 'react';
import {Link} from 'react-router';
import {Modal} from 'react-bootstrap';
class Header extends React.Component {
  constructor(props) {
    super(props);    
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {  
  }

  onChange(state) {
    this.setState(state);
  }
  
  render() {   
    return (
        <div id="slider" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#slider" data-slide-to={0} className="active" />
            <li data-target="#slider" data-slide-to={1} />
            <li data-target="#slider" data-slide-to={2} />
            <li data-target="#slider" data-slide-to={3} />
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="http://localhost:3000/img/1.jpg" alt="Chania" />
              <div className="carousel-caption">
                <h1>Check Out this Moose</h1>
                <p className="lead">This text is super engaging and makes you want to click the button.</p>
                <a href="#" className="btn btn-lg btn-primary">Learn More</a>
              </div>
            </div>
            <div className="item">
              <img src="http://localhost:3000/img/2.jpg" alt="Chania" />
            </div>
            <div className="item">
              <img src="http://localhost:3000/img/3.jpg" alt="Chania" />
            </div>
            <div className="item">
              <img src="http://localhost:3000/img/4.jpg" alt="Chania" />
            </div>
          </div>
          {/* Left and right controls */}
          <a className="left carousel-control" href="#slider" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#slider" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>     
    );
  }
}

export default Header;