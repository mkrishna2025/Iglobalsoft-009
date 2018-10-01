import React, { Component } from 'react';
import './login.css';

import { COUNTRIES, STATES} from '../../data';

class Login extends Component {
    render() {
        return (
            <div>
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label>Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <input type="button" value="Login" />
            </div>
        );
    }
}

// getting data from state
class Login2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                { value: '1', display: 'Australia' },
                { value: '2', display: 'India' },
                { value: '3', display: 'Canada' },
                { value: '4', display: 'USA' }
            ]
        }
    }
    render() {
        return (
            <div>
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label>Country</label>
                <select id="country" name="country">
                    <option value="0">Select Country</option>
                    {this.state.countries.map(country => <option value={country.value}>{country.display}</option>)}
                </select>

                <input type="button" value="Login" />
            </div>
        );
    }
}

// Having Country, State
class Login3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                { value: '1', display: 'Australia' },
                { value: '2', display: 'India' },
                { value: '3', display: 'Canada' },
                { value: '4', display: 'USA' }
            ],
            states: [
                { value: '1', display: 'Telangana' },
                { value: '2', display: 'Delhi' },
                { value: '3', display: 'Washington' },
                { value: '4', display: 'NewYork' }
            ]
        }
    }
    render() {
        return (
            <div>
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label>Country</label>
                <select id="country" name="country">
                    <option value="0">Select Country</option>
                    {this.state.countries.map(country => <option value={country.value}>{country.display}</option>)}
                </select>

                <label>State</label>
                <select id="state" name="state">
                    <option value="0">Select State</option>
                    {this.state.states.map(state => <option value={state.value}>{state.display}</option>)}
                </select>
                <input type="button" value="Login" />
            </div>
        );
    }
}

// Having Country to State Filters
class Login4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [
                { value: '1', display: 'Australia' },
                { value: '2', display: 'India' },
                { value: '3', display: 'Canada' },
                { value: '4', display: 'USA' }
            ],
            states: [
                { value: '1', display: 'Telangana', country: '2' },
                { value: '2', display: 'Delhi', country: '2' },
                { value: '3', display: 'Washington', country: '4' },
                { value: '4', display: 'NewYork', country: '4' }
            ],
            statesClone: [
                { value: '1', display: 'Telangana', country: '2' },
                { value: '2', display: 'Delhi', country: '2' },
                { value: '3', display: 'Washington', country: '4' },
                { value: '4', display: 'NewYork', country: '4' }
            ]
        }
    }
    onCountryChange(event){
        var country = event.target.value;
        var filteredStates = [];
        for(var state of this.state.states){
            if(state.country == country){
                filteredStates.push(state);
            }
        }
        this.setState({ statesClone: filteredStates });
    }
    render() {
        return (
            <div>
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label>Country</label>
                <select id="country" name="country" onChange={this.onCountryChange.bind(this)}>
                    <option value="0">Select Country</option>
                    {this.state.countries.map(country => <option value={country.value}>{country.display}</option>)}
                </select>

                <label>State</label>
                <select id="state" name="state">
                    <option value="0">Select State</option>
                    {this.state.statesClone.map(state => <option value={state.value}>{state.display}</option>)}
                </select>
                <input type="button" value="Login" />
            </div>
        );
    }
}

// Getting Data from External File.
class Login5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statesClone: STATES
        }
    }
    onCountryChange(event){
        var country = event.target.value;
        var filteredStates = [];
        for(var state of STATES){
            if(state.country == country){
                filteredStates.push(state);
            }
        }
        this.setState({ statesClone: filteredStates });
    }
    render() {
        return (
            <div>
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label>Country</label>
                <select id="country" name="country" onChange={this.onCountryChange.bind(this)}>
                    <option value="0">Select Country</option>
                    {COUNTRIES.map(country => <option value={country.value}>{country.display}</option>)}
                </select>

                <label>State</label>
                <select id="state" name="state">
                    <option value="0">Select State</option>
                    {this.state.statesClone.map(state => <option value={state.value}>{state.display}</option>)}
                </select>
                <input type="button" value="Login" />
            </div>
        );
    }
}


export default Login5;