import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import data from './data';

ReactDOM.render(<App datasets={data}/>, document.getElementById('root'));
