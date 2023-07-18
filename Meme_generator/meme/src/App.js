import { useEffect, useState } from "react";

//import Header from "./components/Header";
//import Meme from "./components/Meme";

import WIndowTracker from "./components/WIndowTracker";

import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("App component mounted");

    return () => {
      console.log("App component unmounted");
    };
  }, []);

  function toggleShow() {
    setShow((prevShow) => !prevShow);
  }

  return (
    // <div className="App">
    //   <Header />
    //   <Meme />
    // </div>
    <div className="container">
      <button onClick={toggleShow}>Toggle WindowTracker</button>
      {show && <WIndowTracker />}
    </div>
  );
}

export default App;
