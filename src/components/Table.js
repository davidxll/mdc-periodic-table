import React, { Component } from 'react';
import { elements } from './_data';
import Controls from './Controls';
import ElementInfo from './ElementInfo';
import ElementChunk from './ElementChunk';

class Table extends Component {
  state = {
    showInfo: false,
    selectedElement: {},
    filters: {
      showAtomicNumber: true,
      showName: true,
      showDensity: false,
      showAtomicMass: false,
    }
  };

  handlefilterChange = (change) => {
    this.setState({filters: {...this.state.filters, ...change}})
  }

  showInfo = (num) => {
    this.setState({ showInfo: true, selectedElement: elements[num] });
  };

  closeInfo = () => {
    this.setState({ showInfo: false });
  };

  render() {
    return (
      <div>
        <Controls onFilterChange={this.handlefilterChange} {...this.state.filters}/>
        <div id="table">
          <ElementChunk start={1} end={4} showInfo={this.showInfo} filters={this.state.filters} />
          {/* Information Table */}
          {this.state.showInfo ? (
            <ElementInfo element={this.state.selectedElement} closeInfo={this.closeInfo} />
          ) : (
            ''
          )}
          <ElementChunk start={5} end={57} showInfo={this.showInfo} filters={this.state.filters} />
          {/* Lanthanoids split */}
          <ElementChunk start={72} end={89} showInfo={this.showInfo} filters={this.state.filters} />
          {/* Actinoids split */}
          <ElementChunk start={104} end={119} showInfo={this.showInfo} filters={this.state.filters} />
          {/* Lanthenoids */}
          <ElementChunk start={58} end={71} showInfo={this.showInfo} filters={this.state.filters} />
          {/* Actionoids */}
          <ElementChunk start={90} end={103} showInfo={this.showInfo} filters={this.state.filters} />
        </div>
      </div>
    );
  }
}

export default Table;
