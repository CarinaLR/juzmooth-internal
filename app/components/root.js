import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CampusesList from './CampusesList';
import StudentList from './StudentList';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NewCampusForm from './NewCampusForm';
import NewStudentFrom from './newStudentForm';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="/" className="link">
            <a href="">Home</a>
          </Link>
          <Link to="/campuses" className="link">
            <a href="">Productos</a>
          </Link>
          <Link to="/students" className="link">
            <a href="">Clientes</a>
          </Link>
          <Link to="/campuses/newCampus" className="link">
            <a href="">Ordenes</a>
          </Link>
          <Link to="/students/newStudent" className="link">
            <a href="">Entregas</a>
          </Link>
        </nav>
        <main>
          <h1>Juzmooth</h1>
          <p>Habitos sanos para todos los dias.</p>
          <img
            src={
              'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80'
            }
          />
          <Switch>
            <Route exact path="/" />
            <Route exact path="/campuses" component={CampusesList} />
            <Route exact path="/students" component={StudentList} />
            <Route exact path="/campuses/newCampus" component={NewCampusForm} />
            <Route
              exact
              path="/students/newStudent"
              component={NewStudentFrom}
            />
            <Route exact path="/campuses/:id" component={SingleCampus} />
            <Route exact path="/students/:id" component={SingleStudent} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Root;
