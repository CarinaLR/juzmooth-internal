import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Juzmooth</h1>
        <p>Habitos sanos para todos los dias.</p>
        <img
          id="imgHome"
          src={
            'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80'
          }
        />
      </div>
    );
  }
}

export default Home;
