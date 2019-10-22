import React, {Component} from 'react';
import { connect } from 'react-redux';
import { gettingCampuses } from '../reducers/campuses';
import { gettingStudents } from '../reducers/students'
import {Link} from 'react-router-dom'

class CampusesList extends Component {
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        this.props.gettingCampuses();
        // this.props.gettingStudents();
      }
    
    render() {
        console.log('props.campuses ->', this.props.campuses)
        return (
        <div>
            <h1>CAMPUSES</h1>
            <p>Check all campuses available!</p>
            {this.props.campuses.map(campus =>
                (
                <ul key={campus.id}>
                    <Link to={`/campuses/${campus.id}`}>
                        <li>{campus.name}</li>
                        <img src={campus.imageUrl} />
                    </Link>
                </ul>
                )
            )}
        </div>
        )
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
        gettingCampuses: () => {
            dispatch(gettingCampuses())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusesList);


