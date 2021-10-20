import React from "react";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const NextArrow = (props) => {
  //const {className, style, onClick }= props;
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: "40px",
      position: "absolute",
      borderRadius: "50%",
       reight: 0}}
   onClick={props.onClick}
    />
    </>
  );
};

export const PrevArrow = (props) => {
  return (
    <>
   <div
   className={props.className}
   style={{ ...props.style,
     backgroundColor: "rgba(0, 0, 0, 0.4)",
     height: "40px",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     cursor: "pointer",
     width: "40px",
     position: "absolute",
     borderRadius: "50%",
     left: -15,
     zIndex: 10}}
   onClick={props.onClick}
    />
    </>
  );
};
