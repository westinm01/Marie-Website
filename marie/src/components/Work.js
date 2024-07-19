import React from 'react'
import './Work.css'
const Work = (props) => {
  return (
    <div style = {{"width": "100%"}}>
        <div className = "WorkHeader">
            <div className = "WorkHeaderImage">
                <img src = {props.image} alt = {props.title} className = "workImage"/>
            </div>
            <div className = "WorkHeaderText">
                <p className = "WorkHeaderTitle">{props.title}</p>
                <p className = "WorkHeaderLocation">{props.location}</p>
                <p className = "WorkHeaderDate">{props.date}</p>
            </div>
            <ul className ="WorkHeaderDesc">
                {props.desc.map(desc => {
                    return <li>{desc}</li>})}
            </ul>
        </div>

        <div className = "experienceTags">
            {props.tags.map(tag => {
                return <p className = "tag">{tag}</p>})}
        </div>

    </div>
  )
}

export default Work;