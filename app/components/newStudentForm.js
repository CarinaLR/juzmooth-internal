import React, { Component } from 'react';


class NewStudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
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
        this.setState({
            firstName: '',
            lastName: '',
            email: ''
        })
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
                    <input type='text' id='lastName' omChange={this.handleChange} value={this.state.lastName}/>
                </label>
                <br/>
                <label>
                    Email:
                    <br/>
                    <input type='text' id='email' onChange={this.handleChange} value={this.state.email}/>
                </label>
                <br/>
                <button type='submit'>Submit New Campus</button>
            </form>
        )
    }
}

export default NewStudentForm;