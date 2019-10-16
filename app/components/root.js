import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from './Home'
import CampusesList from './CampusesList'
import StudentList from './StudentList'

const Root = () => {
    return (
      <Router>
      <div>
        <nav>
          Welcome!
        <Link to='/home' className='link'>Home</Link>
        <Link to='/campuses' className='link'>Campuses</Link>
        <Link to='/students' className='link'>Students</Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with your journey!</p>
          <Switch>
          <Route exact path='/' />
          <Route exact path='/' component={Home} />
          <Route exact path='/campuses' component={CampusesList} />
          <Route exact path='/students' component={StudentList} />
          </Switch>
        </main>
      </div>
      </Router>
    )
};

export default Root
