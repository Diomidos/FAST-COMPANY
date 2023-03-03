import React from "react";
const Boockmark = ({ status, ...rest }) => {
  return (
    <button className="btn btn-light" {...rest}>
      <i
        className={
          "bi bi-balloon-heart" + (status ? "bi bi-balloon-heart-fill" : "")
        }
      ></i>
    </button>
  );
};

export default Boockmark;
