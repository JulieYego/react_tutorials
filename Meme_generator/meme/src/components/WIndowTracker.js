import { useEffect, useState } from "react";
import "../assets/styles/styles.css";

function WIndowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}

export default WIndowTracker;
