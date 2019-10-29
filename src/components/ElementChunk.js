import React, { Component, Fragment } from 'react';
import Element from './Element';

function range(start, end) {
  return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}

export default class ElementChunk extends Component {
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
    let { start, end, showInfo, filters } = this.props;
    const elementsRange = range(start, end)
    return (
      <Fragment>
        {elementsRange.map((num, i) =>
          <Element showInfo={showInfo} num={`${num}`} key={num} {...filters}/>
        )}
      </Fragment>
    );
  }
}
