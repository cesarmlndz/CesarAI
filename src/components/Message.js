import React from "react";
import chatGPTImage from "../icons/chatGPTimage.png";
import userImage from "../icons/userImage.png";
import "../css/Message.css";

export default function Message(props) {
  const { role, message } = props.m;
  return (
    <div className="chat-container">
      <img src={role === "user" ? userImage : chatGPTImage} alt='icon'/>
      <p className="messae-content">{message}</p>
    </div>
  );
}
