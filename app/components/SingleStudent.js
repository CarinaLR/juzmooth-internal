import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleStudent } from '../reducers/students';
import { getSingleCampus } from '../reducers/campuses';

class SingleStudent extends Component {
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        this.props.getSingleStudent(this.props.match.params.id);
        console.log('params ->', this.props.match.params.id)
      }
    
    render() {
        console.log('state ->', this.props.students)
        return (
        <div>
            <h1>STUDENT</h1>
            <p>Here is the available information</p>
            <h2>{this.props.students.firstName}{'\n'}{this.props.students.lastName}</h2>
            <p>Email:{'\n'}{this.props.students.email}</p>
            <p>GPA:{'\n'}{this.props.students.gpa}</p>
            <img src={this.props.students.imageUrl} />
            <br />
        <Link to='/students'>Back</Link>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps ->', ownProps.match.params.id)
    console.log('state - - ->', state)
    return {
        campuses: state.campuses,
        students: state.students
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getSingleStudent: (id) => {
            dispatch(getSingleStudent(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);