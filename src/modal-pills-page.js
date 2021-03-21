import React from "react";

class ModalPills extends React.Component {
  render() {
    return (
      <div className="modal-form">
        <h3>PRESION</h3>
        <input type="text" />
        <h3>GLUCEMIA</h3>
        <input type="text" />
        <h3>MEDICAMENTOS</h3>
        <input type="checkbox" id="checkbox1" />
        <label htmlFor="checkbox1">Medicamento 1</label>
        <input type="checkbox" id="checkbox2" />
        <label htmlFor="checkbox2">Medicamento 2</label>
        <input type="checkbox" id="checkbox3" />
        <label htmlFor="checkbox3">Medicamento 3</label>
      </div>
    );
  }
}

export default ModalPills;
