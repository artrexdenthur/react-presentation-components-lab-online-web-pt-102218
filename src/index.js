import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import { SimplerComponent } from './components/SimplerComponent';

ReactDOM.render(
  <div className="container">
    <SimpleComponent />
    <SimplerComponent handleClick={undefined} />
  </div>,
  document.getElementById('root')
);