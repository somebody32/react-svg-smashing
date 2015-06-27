import React from 'react';
import Axis from './axis';
import GraphBody from './graph_body';

export default class Graph extends React.Component {
  static defaultProps = { width: 800, height: 600 };

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axis
          x={20}
          y={this.props.height - 100}
          length={this.props.width}
          horizontal={true}
        />
        <Axis
          x={20}
          y={0}
          length={this.props.height - 100}
          horizontal={false}
        />
        <GraphBody
          x={20}
          y={this.props.height - 100}
          data={this.props.data}
        />
      </svg>
    )
  }
}
