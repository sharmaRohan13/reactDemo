import React from "react";

class Click extends React.Component {
  constructor() {
    super();
    this.state = {
      elementId: 0
    };
  }

  handleClick = () => {
    console.log("Click handleClick called");
    const { elementId } = this.state;
    this.setState({ elementId: elementId + 1 });
    this.props.handleClick(elementId + 1);
  };

  render() {
    console.log("Click render called");
    return (
      <div
        className="Click conatiner border"
        style={{ margin: "50px", padding: "20px" }}
      >
        <h3>Last Element Id : {this.state.elementId}</h3>
        <button className="btn btn-lg btn-primary" onClick={this.handleClick}>
          Get Next
        </button>
      </div>
    );
  }
}

export default Click;
