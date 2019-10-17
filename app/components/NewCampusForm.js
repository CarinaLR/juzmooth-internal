import React, { Component } from 'react';
import axios from 'axios'



class NewCampusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            description: ''
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // async newCampus(campus) {
    //     const { data } =await axios.post('/api/campuses', campus)
    //     this.setState({
    //         campuses: [this.state.campuses, data]
    //     })
    // }

    // handleChange(event) {
    //     this.setState({
    //         [event.target.id]: event.target.value,
    //     })
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     // this.props.newCampus(this.state);
    //     this.setState({
    //         name: '',
    //         address: '',
    //         description: ''
    //     })
    // }

    // componentDidMount() {
    //     this.props.newCampus()
    // }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' id='name' onChange={this.handleChange} value={this.state.name}/>
                </label>
                
                <label>
                    Address:
                    <input type='text' id='address' omChange={this.handleChange} value={this.state.address}/>
                </label>

                <label>
                    Description:
                    <input type='text' id='description' onChange={this.handleChange} value={this.state.description}/>
                </label>
                <button type='submit'>Submit New Campus</button>
            </form>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         newCampus: (newCampus) => {
//             dispatch(newCampus(newCampus))
//         }
//     }
// };

export default NewCampusForm