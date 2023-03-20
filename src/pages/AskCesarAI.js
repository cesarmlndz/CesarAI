import React, { useRef, useState } from "react";
import "../css/AskCesarAI.css";
import Message from "../components/Message";
import Select from "../components/Select";
import { v4 as uuid } from 'uuid';
import Form from "../components/Form";

export default function MainPage(props) {
  const API_KEY = process.env.REACT_APP_API_KEY
  
  const { placeholder, disabled, setDisabled } = props

  const inputRef = useRef(null); 

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([{ id: uuid(), role: "chatGTP", message: "Hello, Welcome!" }]);
  const [isThinking, setIsThinking] = useState(false);
  const [answerStyle, setAnswerStyle] = useState('Explain to the best of your ability')

  const addQuestion = async (e) => {
    e.preventDefault();

    setDisabled(true)
    setIsThinking(true);

    const newQuestion = {
      id: uuid(),
      role: "user",
      message: question
    };

    setMessages((prevState) => [...prevState, newQuestion]);

    await processToChatGPT(newQuestion);

    setDisabled(false)
    setIsThinking(false);

    inputRef.current.value = '';
  };

  const processToChatGPT = async (message) => {
    let apiMessages = messages.map(() => {
      let role = "";
      role = message.role === "chatGPT" ? "assistant" : "user";
      return { role: role, content: message.message };
    });

    const systemIntro = {
      role: "system",
      content: answerStyle
    };

    const apiBody = {
      "model" : "gpt-3.5-turbo",
      "messages" : [systemIntro, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization" : "Bearer " + API_KEY,
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(apiBody)
    })
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      setMessages((prevState) => [...prevState, {
        role: "chatGPT",
        message: data.choices[0].message.content
      }])
    })
    .catch((err) => console.log(err)) 
  };
  return ( 
    <>
      <Select setAnswerStyle={setAnswerStyle}/>
      <div className="main-container">
        {messages.map((m) => (
          <Message m={m} />
        ))}
        {isThinking && <p className="typing-message">CesarAI is typing...</p>}
      </div>
      <Form onSubmit={addQuestion} setPrompt={setQuestion} disabled={disabled} inputRef={inputRef} placeholder={placeholder}/>
    </> 
  );
}
