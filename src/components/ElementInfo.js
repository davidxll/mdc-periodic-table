import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class ElementInfo extends Component {
  render() {
    let {
      name,
      summary,
      symbol,
      category,
      number,
      source,
      appearance,
      atomic_mass,
      molar_heat,
      density,
      melt,
      boil
    } = this.props.element;
    return (
      <div id="element-info-box">
        <div id="element-box" className={`${category}`}>
          <div className="number">{number}</div>
          <div className="symbol">{symbol}</div>
          <div className="element-name">{name}</div>
          <div className="element-info-mass">{atomic_mass}</div>
        </div>
        <div id="information">
        <Tabs>
          <TabList>
            <Tab>Information</Tab>
            <Tab>Description</Tab>
            <Tab>Applications</Tab>
            <div
              onClick={this.props.closeInfo}
              className="close-button"
              title="Close Info">
              Close [&times;]
            </div>
          </TabList>

          <TabPanel>
            <div className="element-description">
              <h1 className="big_title">{name}</h1>
              <span className={`cat_name ${category}`}>{category}</span>
              {appearance ? (
                <div className="appearance">
                  <strong>Appearance:</strong> {appearance}
                </div>
              ) : (
                ''
              )}
              <table className="atom_info">
                <tr>
                  <th>Atomic Mass</th>
                  <td>{atomic_mass}</td>
                </tr>
                <tr>
                  <th>Density</th>
                  <td>{density}</td>
                </tr>
                {molar_heat &&
                  <tr>
                    <th>Molar Heat</th>
                    <td>{molar_heat}</td>
                  </tr>
                }
                {melt &&
                  <tr>
                    <th>Melt</th>
                    <td>{melt} K</td>
                  </tr>
                }
                {boil &&
                  <tr>
                    <th>Boil</th>
                    <td>{boil} K</td>
                  </tr>
                }
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="element-description-source">
              {summary} ...{' '}
              <a target="_blank" href={source}>
                Source
              </a>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Comming soon</h2>
          </TabPanel>
        </Tabs>
        </div>
      </div>
    );
  }
}
