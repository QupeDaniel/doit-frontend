import React, { Component } from 'react';
import './App.css';
import EditMask from './TaskCreationMask.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
  
        <EditMask />
      

        </header>

      </div>
    );
  }
}

export default App;
