
import React from "react";
import './app.css'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state= ({
      value:props.value,
      items:props.items
    })
  }
  render() {
    return (
      <div className="div">
        <span>{this.props.value}</span>
        <button className="button"onClick={this.props.onClickMod} >수정</button>
        <button className="button" onClick={this.props.onClickDel}>삭제</button>
      </div>
    );
  }
}

export default TodoItem;