import React, {Component} from 'react';
import Content from '../components/Main/Content.jsx';
import Header from '../components/Main/Header.jsx';
import Footer from '../components/Main/Footer.jsx';

export default class Main extends Component {

  render() {
    console.log('isLoggedIn', this.props.isLoggedIn);
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  currentUser: React.PropTypes.object,
  children: React.PropTypes.element,
  isLoggedIn: React.PropTypes.bool,
};
