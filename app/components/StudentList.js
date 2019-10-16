import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gettingStudents } from '../reducers/students'

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
              <h2>Name</h2>
              {this.props.students.map(student =>
                (
                    <ul key={student.id}>
                       <li>{student.firstName}{'\n'}{student.lastName}</li>  
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
