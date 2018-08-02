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
        <QueueList />
        <List />
      </div>
    );
  }
}
