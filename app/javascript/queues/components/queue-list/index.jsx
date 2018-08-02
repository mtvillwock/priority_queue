import React, { Component } from 'react';
import Queue from '../queue';
import data from './data';

export default class QueueList extends Component {
  constructor(props) {
    super(props)
    this.queues = [{text: 'foo'}, {text: 'bar'}]
  }

  render() {
    return (
      <div>
        { this.queues.map((queue) => <Queue key={queue.text} text={queue.text} />) }
      </div>
    );
  }
};