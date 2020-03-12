import React, { Component } from "react";

class Home extends Component {
  render() {
    console.log("here");
    return (
      <div className="home">
        <p>
          <h1>Habitos sanos para todos los dias.</h1>
        </p>
        <img className="imgHome" src={"./assets/juzmooth.png"} />
        <img className="imgHome" src={"./assets/jFront.png"} />
      </div>
    );
  }
}

export default Home;
