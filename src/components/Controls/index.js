import React, { useState } from "react";
import { Button } from "../Button";
//style
import * as styles from "./style.module.scss";

export const Controls = ({ onActorSelection, actorList }) => {
  const [selection, setSelection] = useState("actor");
  const options = [
    {
      text: "Actor",
      value: "actor",
    },
    {
      text: "Voice",
      value: "voice",
    },
    {
      text: "Alignment",
      value: "alignment",
    },
    {
      text: "Background",
      value: "background",
    },
  ];
  const [alignmentOption, setAlignmentOption] = useState("center");

  return (
    <div className={styles.controls}>
      <nav className={styles.options}>
        <ul>
          {options.map((option) => (
            <li key={option.value}>
              <button onClick={() => setSelection(option.value)}>
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {selection === "actor" && (
          <div className={styles.preview}>
            {actorList.map((actor) => (
              <div
                className={styles.minicard}
                onClick={() => onActorSelection(actor)}
              >
                <img src={actor.src} alt={actor.name}></img>
                <span>{actor.name}</span>
              </div>
            ))}
          </div>
        )}
        {selection === "voice" && "Voice"}
        {selection === "alignment" && (
          <div className={styles["preview--alignment"]}>
            <Button
              onClick={() => setAlignmentOption("left")}
              cta="left"
              color={alignmentOption === "left" ? "secondary" : "grey"}
            ></Button>
            <Button
              onClick={() => setAlignmentOption("center")}
              cta="center"
              color={alignmentOption === "center" ? "secondary" : "grey"}
            ></Button>
            <Button
              onClick={() => setAlignmentOption("right")}
              cta="right"
              color={alignmentOption === "right" ? "secondary" : "grey"}
            ></Button>
          </div>
        )}
        {selection === "background" && "background"}
      </div>
    </div>
  );
};
