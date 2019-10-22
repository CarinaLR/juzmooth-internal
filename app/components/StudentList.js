import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gettingStudents } from '../reducers/students'
import { Link } from 'react-router-dom'

class StudentList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.gettingStudents();
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
              <h2>Names</h2>
              {this.props.students.map(student =>
                (
                    <ul key={student.id}>
                      <Link to={`/students/${student.id}`}>
                        <li>{student.firstName}{'\n'}{student.lastName}</li>  
                       </Link>
                    </ul>
                )
            )}
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log('STATE STUDENTS ->', state)
    return {
        campuses: state.campuses,
        students: state.students
    }
};

const mapDispatchToProps = dispatch => {
    return {
        gettingStudents: () => {
            dispatch(gettingStudents())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
