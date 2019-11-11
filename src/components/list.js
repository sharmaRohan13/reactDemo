import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    console.log("List componentDidMount called");
    let list = this.state.list;
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.elementId}`)
      .then(res => res.json())
      .then(json => {
        list.push(json.title);
        console.log(list);
        this.setState({ list });
      });
  }

  renderElements = list => {
    if (list.length) {
      return (
        <ul>
          {list.map(ele => (
            <li key={list.length}>{ele}</li>
          ))}
        </ul>
      );
    }
  };

  render() {
    console.log("List render called");
    return (
      <div className="List border" style={{ margin: "50px", padding: "20px" }}>
        <h3>Elememts</h3>
        {this.renderElements(this.state.list)}
      </div>
    );
  }
}

export default List;
