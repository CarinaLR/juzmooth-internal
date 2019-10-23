import React, { Component } from 'react';
import axios from 'axios';
import { newCampus } from '../reducers/campuses'
import {connect} from 'react-redux'

class NewCampusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await axios.post('/api/campuses', this.state)
            this.props.newCampus(res.data)
            this.setState({
                name: '',
                address: '',
                description: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <br/>
                    <input type='text' id='name' onChange={this.handleChange} value={this.state.name}/>
                </label>
                <br/>
                <label>
                    Address:
                    <br/>
                    <input type='text' id='address' onChange={this.handleChange} value={this.state.address}/>
                </label>
                <br/>
                <label>
                    Description:
                    <br/>
                    <input type='text' id='description' onChange={this.handleChange} value={this.state.description}/>
                </label>
                <br/>
                <button type='submit'>Submit New Campus</button>
            </form>
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
        newCampus: (data) => {
            dispatch(newCampus(data))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NewCampusForm)