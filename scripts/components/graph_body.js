import React from 'react';

export default class GraphBody extends React.Component {
  static defaultProps = { multiplier: 20 };

  prepareData() {
    let d = [`M ${this.props.x} ${this.props.y}`];

    let collector = this.props.data.map(chunk => {
      let xNext = this.props.x + chunk[0] * this.props.multiplier;
      let yNext = this.props.y - chunk[1] * this.props.multiplier;
      return `L ${xNext} ${yNext}`;
    });

    return d.concat(collector).join(' ');
  }

  render() {
    let d = this.prepareData();
    return(
      <path d={d}
        stroke="orange"
        strokeWidth={1}
        fill="none"
      />
    )
  }
}
