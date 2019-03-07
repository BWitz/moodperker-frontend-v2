import React, { Component } from 'react'
import MoodImageCard from '../Components/MoodImageCard'
import '../App.css'

export default class MoodImageContainer extends Component {

    state = {
        firstImageIndex: null,
        secondImageIndex: null
    }

    componentDidMount(){
        setTimeout(() => {this.getFirstImageIndex()}, 300);
        setTimeout(() => {this.getSecondImageIndex()}, 300);
    }

  getRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRounded =  Math.floor(randomNumber);
    return randomNumberRounded;
  }

  getFirstImageIndex = () => {
      let randomImageIndex = this.getRandomNumber(1, 5);
      this.setState({
          firstImageIndex: randomImageIndex
      })
  }

  getSecondImageIndex = () => {
    let randomImageIndex = this.getRandomNumber(6, 10);
    this.setState({
        secondImageIndex: randomImageIndex
    })
}

  getRandomImage = () => {
    let randomImageIndex = this.getRandomNumber(1, 5);
    return this.props.images[randomImageIndex];
  }

  getSecondRandomImage = () => {
    let randomImageIndex = this.getRandomNumber(6, 10);
    return this.props.images[randomImageIndex]
  }

  moodCardManager = () => {
    if (this.props.images.length === 0) {
      return null
    } else {
      return (
        <div className="MoodImageContainer">
        <MoodImageCard image = {this.getRandomImage()}/>
        <br />
        <br />
        <br />
        <MoodImageCard image = {this.getSecondRandomImage()} />
        </div>
      )
    }
  }

render() {
  return (
    <div className="MoodImageContainer">
    {this.state.firstImageIndex === null ? null : <MoodImageCard image = {this.props.images[this.state.firstImageIndex]} />}
    <br />
    <br />
    <br />
    {this.state.secondImageIndex === null ? null : <MoodImageCard image = {this.props.images[this.state.secondImageIndex]} />}
    </div>
    )
  }
}

