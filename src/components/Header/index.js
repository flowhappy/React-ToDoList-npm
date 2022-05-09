import React, {Component} from 'react';
class Header extends Component {
  render() {
    return (
      <div>
          <div className="container">
            <div className="jumbotron"
                 style={
                   {
                     borderRadius:'0 0 20px 20px',
                     padding:'20px',
                     textAlign:'center'
                   }
                 }>
              <h1>ToDoList</h1>
              <p>Come and add your own todolist</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;