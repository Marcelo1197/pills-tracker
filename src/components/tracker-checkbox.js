import React from "react";
import SwitchCheckBox from "./switch-checkbox";

function TrackerCheckBoxes() {
  return (
    <>
      <h3>Trackeo</h3>
      <ul>
        <li>
          <strong>Glucemia</strong>
          {SwitchCheckBox}
        </li>
        <li>
          <strong>Presion</strong>
          {SwitchCheckBox}
        </li>
        <li>
          <strong>Medicamentos</strong>
          {SwitchCheckBox}
        </li>
      </ul>
    </>
  );
}

export default TrackerCheckBoxes;
