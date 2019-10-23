import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gettingStudents , deleteStudent} from '../reducers/students'
import { Link } from 'react-router-dom'

class StudentList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.gettingStudents();
  }

  deleteButton(studentId) {
    try {
      this.props.deleteStudent(studentId)
    } catch (error) {
      console.error(error)
    }
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
                       <button type='delete' onClick={ () => {this.deleteButton(student.id)}}>Remove Student</button>
                    </ul>
                )
            )}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        campuses: state.campuses,
        students: state.students
    }
};

const mapDispatchToProps = dispatch => {
    return {
        gettingStudents: () => {
            dispatch(gettingStudents())
        },
        deleteStudent: (id) => {
          dispatch(deleteStudent(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
