import React from 'react'
import './infoSection.css'

const infoSection = (props) => {
  return (
    <div className = "infoSection">
        <div className = "infoSectionTitle retroFont">{props.title}</div>
        <hr className = "infoSectionLine"/>
        <div className = "infoSectionText">{props.text}</div>
    </div>
  )
}

export default infoSection