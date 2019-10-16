import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleStudent } from '../reducers/students';

class SingleStudent extends Component {
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        this.props.getSingleStudent();
      }
    
    render() {
        console.log('props.students ->', this.props.students)
        return (
        <div>
            <h1>SINGLE CAMPUSES</h1>
            <p>Check ONE campuses available!</p>
            {this.props.students.map(student =>
                (
                <ul key={student.id}>
                <li>{student.firstName}{'\n'}{student.lastName}</li>
                </ul>
                )
            )}
        <Link to='/students'>Back</Link>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        campuses: state.campuses,
        students: state.students.id
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getSingleStudent: () => {
            dispatch(getSingleStudent())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);