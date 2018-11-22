import React, { Component } from "react";
import { observer } from "mobx-react";
import obsModal from "./obsModal";

const ModalButton = observer(
  class Modal extends Component {
    constructor(props) {
      super(props);
      this.onShowClick = this.onShowClick.bind(this);
    }

    onShowClick(e) {
      e.preventDefault();
      obsModal.show = !obsModal.show;
      obsModal.body = this.props.modalBody;
    }

    render() {
      return (
        <>
          <button
            type="submit"
            onClick={e => {
              this.onShowClick(e);
            }}
          >
            {this.props.modalBtnText}
          </button>
        </>
      );
    }
  }
);

export default ModalButton;
