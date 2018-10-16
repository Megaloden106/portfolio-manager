import React from 'react';
import moment from 'moment';
import styles from '../styles/Graph.css';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.draw.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    if (data[0] !== undefined) { this.draw(); }
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    const { data } = this.props;
    let max = 0;
    let min = 0;
    const canvas = document.getElementById('canvas');
    data.forEach((entry) => {
      const balance = Number(entry.balance.slice(1).replace(',', ''));
      max = Math.max(max, balance);
      min = Math.min(min, balance);
    });
    const xStep = canvas.width / moment(data[0].date)
      .diff(moment(data[data.length - 1].date), 'days');
    const yStep = canvas.height / ((max - min) * 1.2);
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      data.forEach((entry, idx) => {
        const x = canvas.width - xStep * moment(data[0].date)
          .diff(moment(entry.date), 'days');
        const balance = Number(entry.balance.slice(1).replace(',', ''));
        const y = canvas.height - balance * yStep;
        if (idx > 0) {
          ctx.lineTo(x, y);
        } else {
          ctx.moveTo(x, y);
        }
      });
      ctx.stroke();
      ctx.closePath();
    }
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.container}>
        {data[0] !== undefined
          ? <h1>{data[0].balance}</h1>
          : <h1>Balance</h1>}
        <canvas id="canvas" width="668" height="447" className={styles.canvas} />
      </div>
    );
  }
}

export default Graph;
