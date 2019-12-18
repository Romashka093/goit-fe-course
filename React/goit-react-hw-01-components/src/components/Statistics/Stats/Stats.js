import React from 'react';

const Stats = ({ id, label, percentage }) => {
  return (
    <>
      {id.map(item => (
        <li className={item}>
          <span>{label}</span>
          <span>{percentage}%</span>
        </li>
      ))}
    </>
  );
};

export default Stats;
