import React from "react";

class PillsList extends React.Component {
  render() {
    return (
      <div className="pillsList">
        <div className="col-md-3">
          <strong>Medicacion 1</strong>
          <input type="text" />
        </div>
        <div className="col-md-3">
          <strong>Medicacion 2</strong>
          <input type="text" />
        </div>
        <div className="col-md-3">
          <strong>Medicacion 3</strong>
          <input type="text" />
        </div>
        <div className="pillsList__button">
          <button>FINALIZAR</button>
        </div>
      </div>
    );
  }
}

export default PillsList;
