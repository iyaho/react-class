import React from "react";
import Todo from "./Todo";
import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onClickDel= idx =>{
    const items = this.state.items;
    this.setState({
      items:[...items.slice(0,idx),...items.slice(idx+1)]
    });
    console.log(idx);
  };

  onClickMod=(value,idx) => {
    const newItems=[
      ...this.state.items.slice(0,idx),
      value,
      ...this.state.items.slice(idx+1)
    ];
    this.setState({
      items:newItems
    });
  };
  
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange}/>
        <button onClick={this.onClickAdd} >추가</button>
        {this.state.items.map((value, idx) => (
          <Todo key={Math.random()} value={value} onClickDel={()=>{this.onClickDel(idx)}} onClickMod={()=>{var value=prompt();this.onClickMod(value,idx)}}/>
        ))}
      </div>
    );
  }
}
export default App; 