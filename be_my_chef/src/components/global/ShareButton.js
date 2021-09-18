import React, { useState } from "react";
import { RWebShare } from "react-web-share";

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
            <button>Share 🔗</button>
          </RWebShare>
        </div>
      );
};
