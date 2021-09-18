import React, { Component } from "react";
import { Snapshare } from "react-snapshare";

class SnapShareButton extends Component {
  render() {
    return (
      <Snapshare
        dataShareUrl={this.props.url}
      />
    );
  }
}


export {
  SnapShareButton
}