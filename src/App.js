import React from "react";
import Click from "./components/click";
import List from "./components/list";

class App extends React.Component {
  state = {
    elementId: 1
  };

  handleClick = id => {
    console.log("ID passed", id);
    this.setState({ elementId: id });
  };

  render() {
    const elementId = this.state.elementId;
    return (
      <div className="container">
        <div className="row">
          <Click elementId={elementId} handleClick={this.handleClick} />
          <List elementId={elementId} />
        </div>
      </div>
    );
  }
}

export default App;
