import React, { Component } from 'react';
import User from './User';
import photo from './photo.png';

class Rachid extends Component {
  render() {
    return (
      <div>
        <User name="Marcos Rachid" photo={photo}></User>
        <User name="João Rachid" photo={photo}></User>
        <User name="Pedro Rachid" photo={photo}></User>
      </div>
    );
  }
}

export default Rachid;
