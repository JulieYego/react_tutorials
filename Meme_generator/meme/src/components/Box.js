//import { useState } from "react";

function Box({ on, handleClick, id }) {
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };
  return <div className="box" style={styles} onClick={handleClick}></div>;
}

export default Box;
