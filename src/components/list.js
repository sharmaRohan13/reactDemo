import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  getElement = id => {
    console.log("List getElement called");
    let list = this.state.list;
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(json => {
        list.push(json.title);
        this.setState({ list });
      });
  };

  renderElements = list => {
    if (list.length) {
      return (
        <ul>
          {list.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>
      );
    }
  };

  render() {
    console.log("List render called");
    return (
      <div
        className="List container border"
        style={{ margin: "50px", padding: "20px" }}
      >
        <h3>Elememts</h3>
        {this.renderElements(this.state.list)}
      </div>
    );
  }
}

export default List;
