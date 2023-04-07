import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        SolarSystem
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
