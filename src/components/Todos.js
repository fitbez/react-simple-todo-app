import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={this.props.handleChange}
            handleDeleteTodo={this.props.handleDeleteTodo}
          ></TodoItem>
        ))}
      </div>
    );
  }
}
