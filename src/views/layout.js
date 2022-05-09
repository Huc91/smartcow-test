import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalState } from "../state/index.js";

import logo from "../data/images/logo.png";
//style
import * as styles from "./style.module.scss";

export default function Layout(props) {
  const location = useLocation();

  const [isUserLoggedin] = useGlobalState("isUserLoggedIn");

  return (
    <div className={styles.layout}>
      <nav className={styles["layout__nav"]}>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="logo"></img>
            </Link>
          </li>
          {isUserLoggedin && (
            <>
              <li
                className={`${styles.icon} ${
                  location.pathname === "/" ? styles["icon--active"] : ""
                }`}
              >
                V
              </li>
              <li className={`${styles.icon}`}>S</li>
            </>
          )}
        </ul>
      </nav>
      {props.children}
    </div>
  );
}
