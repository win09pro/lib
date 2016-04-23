import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Mainpost from './Post/Mainpost';
import MainBook from './Book/MainBook';

class Main extends React.Component {
  render() {
    return (  
    <div>    
        <Mainpost/>  
        <MainBook/>
    </div>     
    );
  }
}

export default Main;
