import React, { Component } from 'react';
import { elements } from './_data';

function getStyles (props) {
  let styles = {
    elementName: {}
  };
  if (props.showName && (props.showDensity || props.showAtomicMass)) {
    styles.elementName.marginTop = '0';
  }
  return styles;
}

export default class Element extends Component {
  state = {
    hover: false
  };

  openInfo = (event) => {
    this.props.showInfo(this.props.num);
  };

  onMouseEnter = (event) => {
    this.setState({ hover: true });
  };

  onMouseLeave = (event) => {
    this.setState({ hover: false });
  };

  render() {
    let { num, showDensity, showAtomicMass, showAtomicNumber, showName } = this.props;
    let element = elements[num];
    let styles = getStyles(this.props);
    return (
      <div
        title={element.name}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openInfo}
        tabIndex="0"
        className={`element element-${num} ${element.category} ${
          this.state.hover ? 'active' : ''
        }`}>
        {showAtomicNumber &&
          <div className="number">{element.number}</div>
        }
        <div className="symbol" style={styles.elementName}>{element.symbol}</div>
        {showName && 
          <div className="element-name">{element.name}</div>
        }
        {showAtomicMass &&
          <div className="element-mass">{element.atomic_mass}</div>
        }
        {showDensity &&
          <div className="element-mass">{element.density}</div>
        }
      </div>
    );
  }
}
