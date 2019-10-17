import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom'
import CampusesList from './CampusesList'
import StudentList from './StudentList'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import NewCampusForm from './NewCampusForm'

const Root = () => {
    return (
      <Router>
      <div>
        <nav>
          Welcome!
        <Link to='/' className='link'><a href=''>Home</a></Link>
        <Link to='/campuses' className='link'><a href=''>Campuses</a></Link>
        <Link to='/students' className='link'><a href=''>Students</a></Link>
        <Link to='/campuses/:id' className='link'><a href=''>Go To Campus</a></Link>
        <Link to='/students/:id' className='link'><a href=''>Student</a></Link>
        <Link to='/campuses/newCampus' className='link'><a href=''>Add New Campus</a></Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with your journey!</p>
          <Switch>
          <Route exact path='/' />
          <Route exact path='/campuses' component={CampusesList} />
          <Route exact path='/students' component={StudentList} />
          <Route exact path='/campuses/:id' component={withRouter(SingleCampus)} />
          <Route exact path='/students/:id' component={SingleStudent} />
          <Route exact path='/campuses/newCampus' component={NewCampusForm} />
          </Switch>
        </main>
      </div>
      </Router>
    )
};

export default Root
