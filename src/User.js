import React, { Component } from 'react';
import './User.css';

class User extends Component {
  render() {
    return (
      <div>
        <div>
            Nome: {this.props.name}
        </div>
        <div>
            Foto: <img className="User-img" src={this.props.photo} />
        </div>
      </div>
    );
  }
}

export default User;
