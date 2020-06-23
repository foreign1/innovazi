import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    time: 0,
  };

  componentDidMount() {
    fetch("https://innovazi.herokuapp.com/time")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ time: data.time });
      });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Today is {this.state.time}</span>
        </header>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     time: [],
//   };

//   componentDidMount() {
//     fetch("http://127.0.0.1:5000/time")
//       .then((res) => res.json)
//       .then((data) => {
//         this.setState({ time: data });
//       })
//       .catch(console.log);
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>The current time is {this.state.time}.</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

//export default App;
