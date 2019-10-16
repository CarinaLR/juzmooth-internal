import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleCampus } from '../reducers/campuses';

class SingleCampus extends Component {
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        this.props.getSingleCampus(this.props.match.params.id);
      }
    
    render() {
        console.log('state ->', this.props.campuses)
        return (
        <div>
            <h1>SINGLE CAMPUS</h1>
            <p>Check ONE campuses available!</p>
            <h2>{this.props.campuses.name}</h2>
           
        <Link to='/campuses'>Back</Link>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps ->', ownProps.match.params.id)
    return {
        campuses: state.campuses,
        students: state.students
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getSingleCampus: (id) => {
            dispatch(getSingleCampus(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);

  