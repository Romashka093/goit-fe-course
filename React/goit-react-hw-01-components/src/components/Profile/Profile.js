import React from 'react';
import Description from './description/Description';
import Stats from './stats/Stats';
import css from './profile.module.css';

const Profile = ({ user }) => (
  <div className={css.profile}>
    <Description {...user} />
    <Stats {...user.stats} />
  </div>
);

export default Profile;
