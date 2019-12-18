import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="File upload" stats={statisticalData} />
  </>
);

export default App;
