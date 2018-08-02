import React, { Component } from 'react';
import Queue from '../queue';
import data from './data';
import styles from './styles.scss';

export default class QueueList extends Component {
  constructor(props) {
    super(props)
    this.queues = data;
  }

  render() {
    return (
      <div className={styles.container}>
        { this.queues.map((queue) => <Queue key={queue.text} text={queue.text} />) }
      </div>
    );
  }
};