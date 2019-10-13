import React, { Component, Fragment } from 'react';

export default class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <img src="https://www.mdc.edu/college_wide/template14/img/mdc-logo-inverse.png" style={{ padding: '8px' }}/>
        <div>
          <h1>The Periodic Table of Elements</h1>
          <h2>For Prof. Mccaffrey. CHM1025. Thank you for inspiring us</h2>
        </div>
      </Fragment>
    );
  }
}
