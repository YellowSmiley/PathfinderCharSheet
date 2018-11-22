import React, { Component } from "react";
import { observer } from "mobx-react";
import obsModal from "./obsModal";

const Modal = observer(
  class Modal extends Component {
    constructor(props) {
      super(props);
      this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
      this.onShowClick = this.onShowClick.bind(this);
    }

    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    setWrapperRef(node) {
      this.wrapperRef = node;
    }

    handleClickOutside(event) {
      if (
        this.wrapperRef &&
        !this.wrapperRef.contains(event.target) &&
        obsModal.show
      ) {
        obsModal.show = !obsModal.show;
      }
    }

    onShowClick(e) {
      e.preventDefault();
      obsModal.show = !obsModal.show;
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
          <div className={obsModal.show ? "modal" : "hidden"}>
            <div className="modal-content" ref={this.setWrapperRef}>
              <button
                type="submit"
                onClick={e => {
                  this.onShowClick(e);
                }}
                className="close"
              >
                &times;
              </button>
              {this.props.children}
            </div>
          </div>
        </>
      );
    }
  }
);

export default Modal;
