// import React from "react";
// // import "./TodoItem.css";

// const TodoItem = props => {
//   const stateHooks=React.useState("");

//   return !props.isEdit ? (
//     <div className="root">
//       <span className="title">{props.value}</span>
//       <button className="change" onClick={props.onClickMod}>
//         수정
//       </button>
//       <button className="remove" onClick={props.onClickDel}>
//         삭제
//       </button>
//     </div>
//   ) : (
//     <div className="root">
//       <input
//         placeholder={props.value}
//         type="text"
//         // value={props.editValue}
//         onChange={props.onChageValue}
//       />
//       <button className="change" onClick={props.onClickConfirm}>
//         확인
//       </button>
//     </div>
//   );
// };

// export default TodoItem;