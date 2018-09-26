import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

class D1 extends Component {
  render() { return (<div> Welcome to Component D1</div> ) }
}
class D2 extends Component {
  render() { return (<div> Welcome to Component D2</div> ) }
}
class D3 extends Component {
  render() { return (<div> Welcome to Component D3</div> ) }
}
class D4 extends Component {
  render() { return (<div> Welcome to Component D4</div> ) }
}
class D5 extends Component {
  render() { return (<div> Welcome to Component D5</div> ) }
}
class D6 extends Component {
  render() { return (<div> Welcome to Component D6</div> ) }
}
class D7 extends Component {
  render() { return (<div> Welcome to Component D7</div> ) }
}
class D8 extends Component {
  render() { return (<div> Welcome to Component D8</div> ) }
}
class D9 extends Component {
  render() { return (<div> Welcome to Component D9</div> ) }
}
class D10 extends Component {
  render() { return (<div> Welcome to Component D10</div> ) }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// Basic Routing
class App2 extends Component{
  render(){
    return (
      <div>
        <Route path="/r1" component={D1} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
      </div>
    );
  }
}

// Sub Route - Make Parent as Exact
class App3 extends Component{
  render(){
    return (
      <div>
        <Route path="/r1" exact component={D1} />
        <Route path="/r1/r5" component={D6} />
        <Route path="/r1/r6" component={D7} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
      </div>
    );
  }
}

// Default with * - Use case UnImplemented Pages
class App4 extends Component{
  render(){
    return (
      <div>
        <Route path="/r1" exact component={D1} />
        <Route path="/r1/r5" component={D6} />
        <Route path="/r1/r6" component={D7} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
        <Route path="/*" component={D8} />
      </div>
    );
  }
}

// Switch - Pick only 1
class App5 extends Component{
  render(){
    return (
      <Switch>
        <Route path="/r1" exact component={D1} />
        <Route path="/r1/r5" component={D6} />
        <Route path="/r1/r6" component={D7} />
        <Route path="/r2" component={D2} />
        <Route path="/r2" component={D5} />
        <Route path="/r3" component={D3} />
        <Route path="/r4" component={D4} />
        <Route path="/*" component={D8} />
      </Switch>
    );
  }
}

class Login extends Component {
  render() { return (<div> Welcome to Login</div> ) }
}
class Home extends Component {
  render() { return (<div> Welcome to Home</div> ) }
}
class UnImplemented extends Component {
  render() { return (<div> Need to Implement </div> ) }
}

class App6 extends Component{
  render(){
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App6;
