import React, { Component } from "react";
import  {Snapshare} from "react-snapshare";
import { RWebShare } from "react-web-share";
import '../../styles/homepage.css'
import {FaShareAltSquare, FaUserPlus, FaSnapchatGhost} from 'react-icons/fa'

const snapstyle = {
  cursor: 'pointer',
  size: '70px'
}

function SnapShareButton(props){
  return (
    <div>
      <FaSnapchatGhost 
        size='70px'
        style={snapstyle}
        onClick={() =>{
          window.open(
            'https://www.snapchat.com/scan?attachmentUrl=https%3A%2F%2Fnotanthony.github.io%2FLTDC%2F',
            "", 
            "width=600,height=500"
          
          ) 
        }}
      />
    </div>
  )
}

function ShareButton(props) {
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

function InviteButton(props) {
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
        <FaUserPlus onClick={null} size={70} className='login-icon'></FaUserPlus>
        </RWebShare>
      </div>
    );
};

export {
  SnapShareButton,
  ShareButton,
  InviteButton
}