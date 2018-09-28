import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div>
                Welcome to Home
                List of Courses
                <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>React Native</li>
                    <li>Node</li>
                </ul>
            </div>
        )
    }
}

class Home2 extends Component {
    render() {
        var courses = [ 'JavaScript', 'React', 'React Native', 'Node' ];
        var liElements = [];
        for(var course of courses){
            liElements.push(<li>{course}</li>);
        }
        return (
            <div>
                Welcome to Home
                List of Courses
                <ul>
                    {liElements}
                </ul>
            </div>
        )
    }
}

class Home3 extends Component {
    render() {
        var courses = [ 'JavaScript', 'React', 'React Native', 'Node' ];
        return (
            <div>
                Welcome to Home
                List of Courses
                <ul>
                    {courses.map((course) => <li>{course}</li>)}
                </ul>
            </div>
        )
    }
}

class Home4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            courses: []
        }
    }
    onLoad(){
        this.setState({
            courses: [ 'JavaScript', 'React', 'React Native', 'Node' ]
        });
    }
    render() {
        return (
            <div>
                Welcome to Home, Please click button to load.
                <br/>
                <input type='button' value='Load' onClick={this.onLoad.bind(this)}/>
                List of Courses
                <ul>
                    {this.state.courses.map((course) => <li>{course}</li>)}
                </ul>
            </div>
        )
    }
}

export default Home4;