import React, { Component } from 'react'
import MoodImageCard from '../Components/MoodImageCard'
import '../App.css'

export default class MoodImageContainer extends Component {

    state = {
        firstImageIndex: null,
        secondImageIndex: null
    }

    componentDidMount(){
        setTimeout(() => {this.getFirstImageIndex()}, 400);
        setTimeout(() => {this.getSecondImageIndex()}, 400);
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

