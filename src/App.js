import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "asze",
        },
        {
          name: "Dracula",
          id: "as32",
        },
        {
          name: "Zombie",
          id: "as49",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
