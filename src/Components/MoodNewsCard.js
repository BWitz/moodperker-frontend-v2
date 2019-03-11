import React from 'react'
import '../App.css'

const MoodNewsCard = props => {
  return (
    <div className="moodNewsCard">
      <h3 className="moodNewsCardTitle"><a href={props.article.news_src} target="_blank" rel="noopener noreferrer"><u>{props.article.title}</u></a></h3>
      <p>{props.article.description}</p>
    </div>
  )
}


export default MoodNewsCard;
