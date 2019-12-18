import React from 'react';
import Stats from './Stats/Stats.js';

const Statistics = props => {
  console.log('props', props);
  return (
    <section className="statistics">
      <h2 className="title">File upload</h2>

      <ul className="stat-list">{/* <Stats  /> */}</ul>
    </section>
  );
};

export default Statistics;
