import React from "react";
import "./css/mainContainer.css";

export default function MainContainer(props) {
  return (
    <main className={props.dictionaryContent[props.content]}>
      {props.children}
    </main>
  );
}
