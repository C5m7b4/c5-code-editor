import React, { useState } from 'react';
import { render } from 'react-dom';
import Demo from './src/Demo';

import '../dist/css/c5-editor.css';

const App = () => {
  return <Demo />;
};

render(<App />, document.getElementById('root'));
