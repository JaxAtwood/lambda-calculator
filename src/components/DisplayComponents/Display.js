import React from "react";

const Display = (props) => {
  console.log("Display", props, props.number);
  return <div className="display">
          {props.operators}
          {/* Display any props data here */}
        </div>;
};

export default Display;