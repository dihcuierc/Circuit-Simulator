// Resistor.js
import React from "react";
import { useDrag } from "react-dnd";

const Resistor = ({ resistor }) => {
  const [, drag] = useDrag({
    type: "RESISTOR",
    item: { resistor },
  });

  return (
    <div ref={(node) => drag(node)} className="Resistor">
      {resistor.value} Ohms
    </div>
  );
};

export default Resistor;
