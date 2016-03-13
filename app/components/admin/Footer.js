import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../../stores/FooterStore'
import FooterActions from '../../actions/FooterActions';

class Footer extends React.Component {

  render() {
    return (
        <footer className="footer">
          
            <p className="text-muted">Place sticky footer content here.</p>
          
        </footer>
    );
  }
}

export default Footer;