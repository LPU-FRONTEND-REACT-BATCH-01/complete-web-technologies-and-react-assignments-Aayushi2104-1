import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let card1="This is card 1"; 
    let card2="This is card 2";
    return (
      <div>
        <h1>{card1}</h1>
        <h2>{card2}</h2>
      </div>
    )
  }
}

