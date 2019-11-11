import React from "react";
import Click from "./components/click";
import List from "./components/list";

class App extends React.Component {
  constructor() {
    super();
    this.child = React.createRef();
  }

  handleClick = id => {
    console.log("ID passed", id);
    this.child.current.getElement(id);
  };

  render() {
    console.log("App render called");
    return (
      <div className="container">
        <div className="row">
          <Click handleClick={this.handleClick} />
          <List ref={this.child} />
        </div>
      </div>
    );
  }
}

export default App;
