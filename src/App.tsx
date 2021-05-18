import React from 'react';

import AppContainer from './AppContainer';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;