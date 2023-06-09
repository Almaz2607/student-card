import React from "react";
import { useHistory } from "react-router-dom";
import { toggleToMainPage } from "../utils/toggle";

const Modal = () => {
  const history = useHistory();

  return (
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Обновлено!
            </h5>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-outline-primary"
              data-bs-dismiss="modal"
              onClick={() => toggleToMainPage(history)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
