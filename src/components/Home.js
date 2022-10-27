import React, { Component } from 'react';
import putabarsa from './../assests/images/putabarsa.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>LA CASA DEL FUTBOL</h1>
        <img src={putabarsa} style={{width:"600px"}}/>
      </div>
    )
  }
}
