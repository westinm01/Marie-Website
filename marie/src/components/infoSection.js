import React from 'react'
import './infoSection.css'

const infoSection = ({title, children}) => {
  return (
    <div className = "infoSection">
        <div className = "infoSectionTitle retroFont">{title}</div>
        <hr className = "infoSectionLine"/>
        <div className = "infoSectionText">{children}</div>
        
    </div>
  )
}

export default infoSection