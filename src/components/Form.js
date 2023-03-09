import React from 'react'
import '../css/Form.css'

export default function Form(props) {
  const { onSubmit, setPrompt , disabled, inputRef, placeholder} = props
  return (
    <form className="form" onSubmit={onSubmit}>
        <input
          placeholder={placeholder} 
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          ref={inputRef}
          disabled={disabled ? 'disabled' : ''}
          style={disabled ? { color: 'grey', cursor: 'not-allowed' } : { color: 'black' }}
          >
        </input>
        <button 
          type="submit"
          disabled={disabled ? 'disabled' : ''}
          style={disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}
          >Send
        </button>
      </form>
  )
}