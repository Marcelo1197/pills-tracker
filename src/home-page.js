import React from "react";
import SwitchCheckBox from "./components/switch-checkbox";
import TrackerCheckBoxes from "./components/tracker-checkbox";
import "./assets/styles/components/home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__input">
          <h3>Nombre</h3>
          <input type="text" placeholder="Ingrese su nombre" />
        </div>
        <div className="home__trackerCheckBoxes">{TrackerCheckBoxes}</div>
        <div className="home__medSelector">
          <strong>Cantidad de medicamentos</strong>
          <input type="number" name="cantidadMedicamentos" id="" />
        </div>
        <button>SIGUIENTE</button>
      </div>
    );
  }
}

export default Home;
