import React, { Component } from "react";
import { Snapshare } from "react-snapshare";
import { RWebShare } from "react-web-share";
import '../../styles/homepage.css'
import {FaShareAltSquare, FaSnapchatSquare} from 'react-icons/fa'

class SnapShareButton extends Component {
  render() {
    return (
      <Snapshare
        dataShareUrl={this.props.url}
      />
    );
  }
}

export default function ShareButton(props) {
  return (
      <div>
        <RWebShare
          data={{
            text: props.text,
            url: props.url,
            title: props.title,
          }}
          onClick={() => console.log("shared successfully!")}
        >
        <FaShareAltSquare onClick={null} size={70} className='login-icon'></FaShareAltSquare>
        </RWebShare>
      </div>
    );
};

export {
  SnapShareButton
}