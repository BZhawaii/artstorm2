// Set up your application entry point here...

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar'
import Hero from './components/hero'
import Artists from './components/artists'
import Parallax from './components/parallax'
import Team from './components/team'
import Footer from './components/footer'
// import SignUp from './components/signup'
// import SignIn from './components/signin'




class Root extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Hero/>
        <Artists/>
        <Parallax/>
        <Team/>
        <Footer/>
        {/* <SignUp/>
        <SignIn/> */}
      </div>
    )
  }
}

export default Root;

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
