import React from 'react'
import '../css/Select.css'

export default function Select(props) {
  const setAnswerStyle = props.setAnswerStyle  
  return (
    <select onChange={(e) => setAnswerStyle(e.target.value)}>
        <option value='Explain to the best of your ability'>
          Explain to the best of your ability
        </option>
        <option value='Explain like a 10 year experienced software engineer'>
          Explain like a 10 year experienced software engineer
        </option>
        <option value='Explain like Yoda'>
          Explain like Yoda
        </option>
        <option value='Explain like a pirate'>
          Explain like a pirate
        </option>
        <option value='Explain in a language of your choice that is not English'>
          Explain in a language of your choice that is not English
        </option>
        <option value='Explain while rhyming'>
          Explain while rhyming
        </option>
        <option value='Explain in one sentence'>
          Explain in one sentence
        </option>
        <option value='Explain like a poet from the 1600s'>
            Explain like a poet from the 1600s
        </option>
        <option value='Explain like teaching to a fifth grader'>
          Explain like teaching to a fifth grader
        </option>
        <option value='Explain like Bad Bunny'>
          Explain like Bad Bunny
        </option>
    </select>
  )
}