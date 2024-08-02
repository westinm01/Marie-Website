import React from 'react'
import './Project.css'

var isLeft = false;

const ProjectText = (props) => {
  return (
    <div className = "projectText" style={isLeft? {marginLeft: "7%"} : {marginRight: "7%"}}>
      <p className = "projectTitle">{props.title}</p>
      <p className = "projectDate">{props.date}</p>
      <p className = "projectDesc">{props.desc}</p>
    </div>
  )
}



const Project = (props) => {
  const warmGradientStyle = "linear-gradient(0deg, rgba(255, 140, 0, 1) -40%, rgba(253, 7, 62, 1) 100%)";
  const coolGradientStyle = "linear-gradient(0deg, rgb(35, 0, 160) 0%, rgba(50, 0, 90, 1) 100%)";
    isLeft = props.index % 2 === 0;
  return (
    <div>
        {isLeft ?
        <div className = "project">
            {ProjectText(props)}
            <div className = "projectFun" style={isLeft? {marginRight: "7%"} : {marginLeft: "7%"}}>
                {props.images.map(image => {
                    return <img className = "projectImage" src = {image} alt = {image}/>
                })}
            </div>
        </div>
        :
        <div className = "project" style = {{"justifyContent": "flex-start"}}>
            <div className = "projectFun" style={isLeft? {marginRight: "7%"} : {marginLeft: "7%"}}>
            {props.images.map(image => {
                    return <img className = "projectImage" src = {image} alt = {image}/>
                })}
            </div>
            {ProjectText(props)}
        </div>
    }
    
    <div className = "experienceTags">
            {props.tags.map((tag, index) => {
                return <p className = "tag" style = {props.isTagLanguage[index]?{backgroundImage: warmGradientStyle}: {backgroundImage: coolGradientStyle}}>{tag}</p>})}
        </div>
    </div>
  )
}

export default Project