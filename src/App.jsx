import React from "react";
import "./App.css";

const App = () => {
  const [name, setName] = React.useState("");
  const [color,setColor]=React.useState([0,0,0]);
  React.useEffect(()=>{
    setColor(randColor());
  },[name]);
  
  const randColor=()=>{
    return [
      Math.floor(Math.random()*255),
      Math.floor(Math.random()*255),
      Math.floor(Math.random()*255)
    ]
  };
  return (
    <div className="aroot">
      <input type="text" onChange={e=>setName(e.target.value)}/>
      <div style={{color: `rgb(${color[0]},${color[1]},${color[2]})`}}>{name}</div>
    </div>
  );
};
export default App;