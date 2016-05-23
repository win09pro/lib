import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../../stores/FooterStore'
import FooterActions from '../../actions/FooterActions';
import {animateScroll}  from  'react-scroll'; 
class Footer extends React.Component {

  render() {  
    return (
        <div className="main-footer">       
        <div className="pull-right hidden-xs">
          Anything you want
        </div>      
        <strong>Copyright &copy; 2015 <a href="#">Company</a>.</strong> All rights reserved.
         <button className="admintoTopbutton" id ="admintoTopbutton"
          onClick={animateScroll.scrollToTop}><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
      </div>
    );
  }
}

export default Footer;