import React, { Component } from 'react'
import CampusesList from './CampusesList'

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: [],
      students: [],
      selectCampus: {}
    }
    this.selectCampus = this.selectCampus.bind(this)
  }
  selectCampus(campus) {
    return this.setState({
      selectCampus: campus,
    });
  }
  render () {return (
    <div>
      <nav>
        Welcome!
      </nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <p>This seems like a nice place to get started with some Routes!</p>
        <CampusesList campuses={this.state.campuses} selectCampus={this.selectCampus}/>
      </main>
    </div>
  )}
};

export default Root
