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
          <h2>
            <a href="#">Queue</a>
          </h2>
          <QueueList />
        </div>
        <div>
          <h2>
            <a href="#">Accomplishments</a>
          </h2>
          <List />
        </div>
      </div>
    );
  }
}
