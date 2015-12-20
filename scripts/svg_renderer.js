import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Graph from './components/graph'

export default function(data) {
  return ReactDOMServer.renderToStaticMarkup(<Graph data={data}/>);
}
