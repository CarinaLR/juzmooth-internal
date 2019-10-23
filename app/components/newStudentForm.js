import React, { Component } from 'react';
import { newStudent } from '../reducers/students'
import { connect } from 'react-redux'

class NewStudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
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
            const firstName = event.target.firstName.value
            const lastName = event.target.lastName.value
            const email = event.target.email.value

            const newData = {
                firstName: firstName,
                lastName:lastName,
                email: email
            }

            try{
            this.props.newStudent(newData)
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                errorMessage: ''
            })
        } catch (error) {
            console.error(error)
            this.setState({errorMessage: 'There was a problem adding student'}) 
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <br/>
                    <input type='text' id='firstName' onChange={this.handleChange} value={this.state.firstName}/>
                </label>
                <br/>
                <label>
                    Last Name:
                    <br/>
                    <input type='text' id='lastName' onChange={this.handleChange} value={this.state.lastName}/>
                </label>
                <br/>
                <label>
                    Email:
                    <br/>
                    <input type='text' id='email' onChange={this.handleChange} value={this.state.email}/>
                </label>
                <br/>
                <button type='submit'>Submit New Student</button>
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
        newStudent: (data) => {
            dispatch(newStudent(data))
        }
    }
};

export default  connect(mapStateToProps, mapDispatchToProps)(NewStudentForm);