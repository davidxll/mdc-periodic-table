import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

export default class Controls extends Component {
  handleVisualPartToggleChange = (evt) => {
    const change = {};
    change[evt.target.name] = evt.target.checked
    console.log(change);
    this.props.onFilterChange(change)
  };
  render() {
    return (
      <div>
        <Collapsible trigger="Filters">
        <form className="visual-parts-toggle">
          <label>
            <input
              onChange={this.handleVisualPartToggleChange}
              type="checkbox"
              name="showAtomicNumber"
              value="showAtomicNumber"
              checked={this.props.showAtomicNumber}
            />Atomic Number
          </label>
          <label>
            <input
              onChange={this.handleVisualPartToggleChange}
              type="checkbox"
              name="showName"
              value="showName"
              checked={this.props.showName}
            />Name
          </label>
          <label>
            <input
              onChange={this.handleVisualPartToggleChange}
              type="checkbox"
              name="showAtomicMass"
              value="showAtomicMass"
              checked={this.props.showAtomicMass}
            />Atomic Mass
          </label>
          <label>
            <input
              onChange={this.handleVisualPartToggleChange}
              type="checkbox"
              name="showDensity"
              value="showDensity"
              checked={this.props.showDensity}
            />Density
          </label>
        </form>
        </Collapsible>
      </div>
    );
  }
}
