import React, { Component } from 'react';
import QueueList from './queue-list'
import List from './list'

export default class Base extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <div>
        <h2>Queue</h2>
        <QueueList />
      </div>
      <div>
        <h2>Accomplishments</h2>
        <List />
      </div>
      </div>
    );
  }
}
