import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const arrElem = []

function addElement (el) {
  arrElem.push(el);
}

class AddElement extends Component {
  render() {
    return (
      <div>
        <input type="text" id='inputAdd'></input>
        <button onClick={() => addElement(document.getElementById('inputAdd').value) }>add</button>
      </div>
    )
  }
}

class Element extends Component {
  render() {
    return (
      <div>
        <p>{this.props.titre}</p>
      </div>
    )
  }
}

class TodoList extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    const listElem = arrElem.map((elem, index) => {
      return <li key={index}> <Element titre={elem} /> </li>
    })
    return (
      <div>
        <div>
          <AddElement />
        </div>
        <div>
          {listElem}
          <p>TD</p>
        </div>
      </div>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}
//         <AddElement />
//         <TodoList />
//       </div>
//     );
//   }
// }

export default TodoList;
