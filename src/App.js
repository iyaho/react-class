import React from 'react';
import logo from "./img/googlelogo.png";
import apps from "./img/apps.png";
import user from "./img/circle.png";
import './App.css';

function App() {
  return (
    <div className="root">
      <header><a href="https://mail.google.com/">Gmail</a><a href="https://www.google.co.kr/imghp?hl=ko&tab=ri&ogbl">이미지</a><img src={apps} alt="앱" className="apps"/><img src={user} alt="user" className="user"/></header>
      <div className="logo"><img src={logo} alt="구글 로고"/></div>
      <nav></nav>
      <div>
        <section>main</section>
        <aside>aside</aside>
      </div>
      <footer>footer</footer>
    </div>
  );
}
export default App;
