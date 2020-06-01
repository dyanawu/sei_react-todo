import React from 'react';
import { hot } from 'react-hot-loader';

import ControlCard from './components/controlcard';

class App extends React.Component {
  render() {
    return (
      <>
        <ControlCard />
      </>
    );
  }
}

export default hot(module)(App);
