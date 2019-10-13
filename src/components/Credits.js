import React, { Component } from 'react';

export default class Credits extends Component {
  render() {
    return (
        <p style={{textAlign: 'center'}}>
            Made by David Llaca Martin. Special thanks to{' '} 
            <a href="https://github.com/TamalAnwar/periodic-table" target="_blank">
                Tamal Anwar
            </a>
            {' '}for such a wonderful open source project
        </p>
    );
  }
}
