import React from 'react';
import {Provider} from 'react-redux';

// Redux
import store from '../Redux';

import RootContainer from './RootContainer';

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
