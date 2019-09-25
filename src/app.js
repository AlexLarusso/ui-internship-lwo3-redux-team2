import React from "react";
import ReactDOM from "react-dom";
import style from './app.module.scss';

const App = () => {
  console.log(style)
  return (
    <div className={style.test}>
      <p>React here!</p>
      <img src={'./assets/logo.png'} />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
