import React, { useRef, useState } from 'react'
import Form from '../components/Form'
import loading from '../icons/loading-gif.gif'
import '../css/ImageRendering.css'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY
})

const openAI = new OpenAIApi(configuration)

export default function ImageRendering(props) {
  const { placeholder, disabled, setDisabled } = props

  const [imagePrompt, setImagePrompt] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [requestSent, setRequestSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const inputRef = useRef(null)

  const renderImage = async (e) => {
    e.preventDefault()

    setRequestSent(true)
    setIsLoading(true)
    setDisabled(true)

    const imageData = {
      prompt: imagePrompt
    }
    const response = await openAI.createImage(imageData);
    const urlData = response.data.data[0].url;

    setIsLoading(false)
    setDisabled(false);
    setImageURL(urlData); 

    inputRef.current.value = '';
  }
  return (
    <>
      <div className='images-container main-container'>
        {!requestSent ? <p>Image will be displayed here</p> :
        <>{isLoading ? <img src={loading} alt='render' className='loading'/> : <img src={imageURL} alt='render' className='ai-image'/>}</>
        } 
      </div>
      <Form placeholder={placeholder} onSubmit={renderImage} setPrompt={setImagePrompt} disabled={disabled} setDisabled={setDisabled} inputRef={inputRef}/>
    </> 
  )
}