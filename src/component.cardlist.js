import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import Card from './component.card.js';

class CardList extends Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <Card/>
    )
  }
}

export default CardList;
