import React, { Component } from "react";
import "../css/modalAdmin.css";
import IconConfig from "./IconConfig";
import Config from "./Config";
export default class ModalAdmin extends Component {
  state = {
    display: false,
  };

  handleDisplayConfig = () => this.setState({ display: !this.state.display });

  render() {
    return (
      <div className="modal-admin">
        <IconConfig handleDisplayConfig={this.handleDisplayConfig} />
        {this.state.display && (
          <Config globalProps={this.props.globalProps} func={this.props.func} />
        )}
      </div>
    );
  }
}
