import React, { Component } from 'react';
import { newCampus } from '../reducers/campuses'
import {connect} from 'react-redux'

class NewCampusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            description: '',
            errorMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = event.target.name.value
        const address = event.target.address.value
        const description = event.target.description.value

        const newData = {
                name: name,
                address: address,
                description: description,
                errorMessage: ''
        }
        try {
            this.props.newCampus(newData)
            this.setState({
                name: '',
                address: '',
                description: '',
                errorMessage: ''
            })
        } catch (error) {
            console.error(error)
            this.setState({errorMessage: 'There was a problem creating new campus'})
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