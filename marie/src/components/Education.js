import React from 'react'
import './Education.css'

const Education = (props) => {
  return (
    <div className = "education">
        <img className = "uniImage" src = {props.image} alt = "university"></img>
        <div style = {{"alignItems": "center"}}>
            <div className = "education-header"><span className = "degree">{props.degree}</span> </div>
            <p className = "education-details"><span className = "dates edudet">{props.dates}</span>
            <em><span className = "university edudet">{props.university}</span></em></p>
        </div>
        </div>
  )
}

export default Education;