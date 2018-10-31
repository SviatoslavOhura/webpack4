import React from 'react';
import ReactDOM from 'react-dom';

/* Allias styles set in webpack */
import 'styles/main.scss';

import ComponentOne from 'components/ComponentOne';

const App = () => {

  return (
    <React.Fragment>
      <h1>Hello from webpack app</h1>
      <ComponentOne />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
