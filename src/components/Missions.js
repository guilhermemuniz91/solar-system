import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    // const { name, year, country, destination } = this.props;
    const missionList = missions.map(({ name, year, country, destination }) => (
      <li key={ name }>
        <MissionCard
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      </li>
    ));
    return (
      <div data-testid="missions">
        Missions
        <Title headline="Missões" />
        <ul>
          { missionList }
        </ul>
      </div>
    );
  }
}

export default Missions;
