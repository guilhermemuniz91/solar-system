import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const planetList = planets.map(({ name, image }) => (
      <li key={ name }>
        <PlanetCard planetName={ name } planetImage={ image } />
      </li>
    ));
    return (
      <div data-testid="solar-system">
        SolarSystem
        <Title headline="Planetas" />
        <ul>
          { planetList }
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
