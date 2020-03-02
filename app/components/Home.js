import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log('here');
    return (
      <div className="home">
        <p>
          <h1>Habitos sanos para todos los dias.</h1>
        </p>
        <img className="imgHome" src={'./assets/juzmooth.png'} />
        <img
          className="imgHome"
          src={
            'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80'
          }
        />
      </div>
    );
  }
}

export default Home;
