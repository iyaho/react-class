
import React from "react";
import './app.css'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>{this.props.value}</span>
        <button>수정</button>
        <button>삭제</button>
      </div>
    );
  }
}

export default TodoItem;