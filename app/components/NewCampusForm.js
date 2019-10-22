import React, { Component } from 'react';


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

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            name: '',
            address: '',
            description: ''
        })
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


export default NewCampusForm