import React, { Component } from 'react';
import Card from '../card';
import data from './data';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.cards = data;
  }

  render() {
    return (
      <div>
        { this.cards.map((item, index) => <Card key={index} text={item} />) }
      </div>
    );
  }
};