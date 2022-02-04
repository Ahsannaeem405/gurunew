import React from "react";

const ThemeBtn = (props) => {
    const btnStyle ={
        backgroundColor: props.bg,
        color: props.color,
        width: "160px",
        height: "50px",
        borderRadius: "25px",
        border: "none",
        fontSize: "15px",
        fontWeight: "700",
        fontFamily: "'TT Norms', sans-serif",
    }
  return (
      <>
      <a href="/">
      <button class="theme-btn" style={btnStyle}>{props.text}</button>
      </a>
      
      </>
  );
};

export default ThemeBtn;
