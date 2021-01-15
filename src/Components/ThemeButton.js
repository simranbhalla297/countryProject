import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
function ThemeButton(props) {
  console.log(props.themeValue);
  return (
    <div>
      {props.themeValue ? (
        <div>
          <button className="theme-button" onClick={props.btnclick}>
            <span>
              <FaMoon />
            </span>
            Dark Mode
          </button>
        </div>
      ) : (
        <div>
          <button className="light-button" onClick={props.btnclick}>
            <span>
              <FaRegMoon />
            </span>
            light mode
          </button>
        </div>
      )}
    </div>
  );
}

export default ThemeButton;
