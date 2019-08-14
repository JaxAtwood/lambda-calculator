import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick={() => props.addNumber
    (props.nums)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.nums}
    </button>
  );
};

export default NumberButton;