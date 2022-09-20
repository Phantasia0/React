import React, { useState } from "react";
import Counter from "./Counter";
import CounterReducer from "./CounterReducer";
import Info from "./Info";
import InfoReducer from "./InfoReducer";
import Average from "./Average";
import AverageMemo from "./AverageMemo";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr></hr>
      {visible && <CounterReducer />}
      {visible && <InfoReducer></InfoReducer>}
      <hr></hr>
      <AverageMemo />
    </div>
  );
};

export default App;
