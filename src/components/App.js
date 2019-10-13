import React, { Component } from 'react';
import Welcome from './Welcome';
import Table from './Table';
import Credits from './Credits';

document.title = 'The Periodic Table of Elements';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <Welcome />
        </header>
        <main>
          <Table/>
        </main>
        <footer>
          <Credits/>
        </footer>
      </div>
    );
  }
}

export default App;
