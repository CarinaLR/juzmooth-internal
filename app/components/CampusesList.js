import React, {Component} from 'react';
import { connect } from 'react-redux';
import { gettingCampuses, deleteCampus} from '../reducers/campuses';
import {Link} from 'react-router-dom'
import axios from 'axios';

class CampusesList extends Component {
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        this.props.gettingCampuses();
      }

    async deleteButton(event) {
        event.preventDefault();
        try {
        const remove = await axios.delete('/api/campuses', this.props.params.id)
        this.props.deleteCampus(remove.data);
        } catch (error) {
            console.error(error)
        }
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
                    <button type='delete' onClick={this.deleteButton.bind(this)}>Remove Campus</button>
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
            dispatch(gettingCampuses(), deleteCampus())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusesList);


