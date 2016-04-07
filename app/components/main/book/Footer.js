import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = FooterStore.getState();
  //   this.onChange = this.onChange.bind(this);
  // }

  // componentDidMount() {
  //   FooterStore.listen(this.onChange);
  //   FooterActions.getTopCharacters();
  // }

  // componentWillUnmount() {
  //   FooterStore.unlisten(this.onChange);
  // }

  // onChange(state) {
  //   this.setState(state);
  // }

  render() {
    return (
      <footer>
        <div className='container'>
           <p>Copyright© 2015 Thư viện Đại học Bách Khoa TP Hồ Chí Minh</p>           
        </div>
      </footer>
    );
  }
}

export default Footer;