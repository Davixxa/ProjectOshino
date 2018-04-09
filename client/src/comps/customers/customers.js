import React, { Component } from 'react';
import axios from 'axios';
import './customers.css';

class App extends Component {

    componentDidMount() {
        axios.get('http:/localhost:5000/api/customers').then((res => {
            this.setState((res.data))
        }));
    }

  render() {
    return (
      <div>
          <li> {this.res.data.name} </li>
      </div>
    );
  }
}

export default App;
