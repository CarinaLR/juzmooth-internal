import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log('here');
    return (
      <div className="home">
        <h1>Juzmooth</h1>
        <p>Habitos sanos para todos los dias.</p>
        {/* <img
          id="imgHome"
          src={
            'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80'
          }
        /> */}
        <img id="imgHome" src={require('../assets/jLogo.png')} />
      </div>
    );
  }
}

export default Home;
