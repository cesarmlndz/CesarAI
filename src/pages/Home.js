import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import imageRender from '../icons/imageRender.svg'

export default function Home() {
  return (
    <div className="home-container">
        <Link to='/AskCesarAI' className="askcesar-container service">
                <h2 className="service-title">AskCesarAI</h2>
                <img src='https://cdn-icons-png.flaticon.com/512/4431/4431830.png' alt='logo'/>
                <p className="service-description">
                    Using the gpt-3.5-turbo AI model from the openai API, AskCesarAI mimicks the famous ChatGPT
                    functionality as the user can provide a question / prompt, with the model returning a detailed response.
                    Users can also select from a variety of options which way or style they want the model to respond in
                    (ex. Speak like Yoda!)
                </p>
        </Link>
        <Link to='/ImageRendering' className="askcesar-container service">
                <h2 className="service-title">ImageRendering</h2>
                <img src={imageRender} alt='logo'/>
                <p className="service-description">
                    Using the DALL-E 2 AI model from the openai API, ImageRendering lets the user input a detailed description
                    for an image, and a digital image will be displayed for them based on the promt or description given. Image descriptions
                    can be simple but also very detailed (ex. A man swimming with a banana hat)
                </p>
        </Link>
    </div>
  )
}