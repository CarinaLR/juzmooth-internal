import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'
import CampusesList from './CampusesList'
import StudentList from './StudentList'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'

const Root = () => {
    return (
      <Router>
      <div>
        <nav>
          Welcome!
        <Link to='/' className='link'>Home</Link>
        <Link to='/campuses' className='link'>Campuses</Link>
        <Link to='/students' className='link'>Students</Link>
        <Link to='/campuses/:id' className='link'>Go To Campus</Link>
        <Link to='/students/:id' className='link'>Student</Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with your journey!</p>
          <Switch>
          <Route exact path='/' />
          <Route exact path='/campuses' component={CampusesList} />
          <Route exact path='/students' component={StudentList} />
          <Route exact path='/campuses/:id' component={withRouter(SingleCampus)} />
          <Route exact path='/students/:id' component={withRouter(SingleStudent)} />
          </Switch>
        </main>
      </div>
      </Router>
    )
};

export default Root
