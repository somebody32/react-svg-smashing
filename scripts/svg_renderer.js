import React from 'react';
import Graph from './components/graph'

export default function(data) {
  return React.renderToStaticMarkup(<Graph data={data}/>);
}
