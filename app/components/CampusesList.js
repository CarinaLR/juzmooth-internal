import React, {Component} from 'react';
import { connect } from 'react-redux';
import { gettingCampuses, deleteCampus} from '../reducers/campuses';
import {Link} from 'react-router-dom'

class CampusesList extends Component {
    constructor(props) {
        super(props);
        this.deleteButton = this.deleteButton.bind(this)
      }
    
    componentDidMount() {
        this.props.gettingCampuses();
      }

    deleteButton(campusId) {
        try {
        this.props.deleteCampus(campusId);
        } catch (error) {
            console.error(error)
        }
    }

    render() {
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
                    <button type='delete' onClick={ () => {this.deleteButton(campus.id)}}>Remove Campus</button>
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
        },
        deleteCampus: (id) => {
            dispatch(deleteCampus(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusesList);


