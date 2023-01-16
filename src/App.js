import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Counter from "./counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="https://cihatkocak.netlify.app/">Say Hi to me xd!</a>
        <hr />
        <Counter />
      </div>
    );
  }
}

export default App;
