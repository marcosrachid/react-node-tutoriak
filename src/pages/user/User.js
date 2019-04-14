import React, { Component } from 'react';
import UserForm from './UserForm';

class User extends Component {
  render() {
      let list = [
          {
              name: "Marcos Rachid",
              email: "marcosrachid@gmail.com"
          },
          {
            name: "João Rachid",
            email: "joaorachid@gmail.com"
          },
          {
            name: "Pedro Rachid",
            email: "pedrorachid@gmail.com"
          }
      ];
    return (
      <div>
        <UserForm></UserForm>
        <table>
            <tr>
                <th>Nome</th>
                <th>E-mail</th>
            </tr>
            {list.map((item) => (
                <tr>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.email}
                    </td>
                </tr>
            ))}
        </table>
      </div>
    );
  }
}

export default User;
