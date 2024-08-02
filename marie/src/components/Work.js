import React from 'react'
import './Work.css'
const Work = (props) => {
    const warmGradientStyle = "linear-gradient(0deg, rgba(255, 140, 0, 1) -40%, rgba(253, 7, 62, 1) 100%)";
    const coolGradientStyle = "linear-gradient(0deg, rgb(35, 0, 160) 0%, rgba(50, 0, 90, 1) 100%)";
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
            {props.tags.map((tag, index) => {
                return <p className = "tag" style = {props.isTagLanguage[index]?{backgroundImage: warmGradientStyle}: {backgroundImage: coolGradientStyle}}>{tag}</p>})}
        </div>

    </div>
  )
}

export default Work;