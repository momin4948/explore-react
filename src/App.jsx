import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Test from "./Test";
import Friends from "./Friends";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>React Core</h3>
      <Test></Test>
      <Friends></Friends>
    </>
  );
}

export default App;
