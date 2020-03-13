import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    input: "",
    Todolist: []
  };
  ajouter = e => {
    this.setState({
      Todolist: this.state.Todolist.concat({
        text: this.state.input,
        complete: false
      }),
      input: ""
    });
  };
  changer = f => {
    this.setState({ input: f.target.value });
  };
  delete = index => {
    this.setState({
      Todolist: this.state.Todolist.filter((el, i) => i !== index)
    });
  };
  completet = index => {
    this.setState({
      Todolist: this.state.Todolist.map((el, i) =>
        i === index ? { ...el, complete: !el.complete } : el
      )
    });
  };

  render() {
    return (
      <div className="todo">
        <div className="heade">
          <h1>TO-DO APP!</h1>
          <h5>Add New To-Do </h5>
          <input
            className="entre"
            type="text"
            onChange={this.changer}
            value={this.state.input}
          />
          <button className="btnadd" onClick={this.ajouter}>
            ADD
          </button>
        </div>
        <div>
          <h3>Let's get some work done!</h3>
          {this.state.Todolist.map((el, i) => (
            <li>
              <button className="comp" onClick={()=>this.completet(i)}>
                {el.complete ? "undo" : "complete"}
              </button>
              <button className="dlt" onClick={() => this.delete(i)}>
                Delete
              </button>
              <p className={el.complete ? "complete" : null}>{el.text}</p>
            </li>
          ))}
        </div>
      </div>
    );
  }
}