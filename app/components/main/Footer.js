import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../../stores/FooterStore'
import FooterActions from '../../actions/FooterActions';

class Footer extends React.Component {

  render() {
    return (
        <div className="main-footer">       
        <div className="pull-right hidden-xs">
          Anything you want
        </div>
      
        <strong>Copyright &copy; 2015 <a href="#">Company</a>.</strong> All rights reserved.
      </div>
    );
  }
}

export default Footer;