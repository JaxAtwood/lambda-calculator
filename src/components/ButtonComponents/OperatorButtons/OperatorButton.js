import React from "react";

const OperatorButton = (props) => {
  return (
    <button onClick={() => props.addOperator(props.operator.value)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.ops.char}
    </button>
  );
};

export default OperatorButton;