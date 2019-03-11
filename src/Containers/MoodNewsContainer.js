import React, { Component } from 'react'
import MoodNewsCard from '../Components/MoodNewsCard'
import '../App.css'

class MoodNewsContainer extends Component {

    state = {
        firstArticleIndex: null,
        secondArticleIndex: null
    }

    componentDidMount(){
        setTimeout(() => {this.getFirstRandomArticle()}, 400);
        setTimeout(() => {this.getSecondRandomArticle()}, 400);
    }

  getRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRounded =  Math.floor(randomNumber);
    return randomNumberRounded
  }

  getFirstRandomArticle = () => {
    let lowerArticleBracket = Math.floor(this.props.news.length / 2);
    let randomArticleIndex = this.getRandomNumber(0, lowerArticleBracket);
    this.setState({
        firstArticleIndex: randomArticleIndex 
    })
  }

  getSecondRandomArticle = () => {
    let higherArticleBracket = Math.ceil(this.props.news.length / 2)
    let randomArticleIndex = this.getRandomNumber(higherArticleBracket, this.props.news.length);
    this.setState({
        secondArticleIndex: randomArticleIndex
    })
    
  }

render() {
  return (
    <div className="MoodNewsContainer">
        {this.state.firstArticleIndex === null ? null : <MoodNewsCard article={this.props.news[this.state.firstArticleIndex]} />}
        <br />
        <br />
        {this.state.secondArticleIndex === null ? null : <MoodNewsCard article={this.props.news[this.state.secondArticleIndex]} />}
    </div>
  )
  }
}

export default MoodNewsContainer;