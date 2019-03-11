import React, { Component } from 'react'
import MoodQuoteCard from '../Components/MoodQuoteCard'
import '../App.css'

class MoodQuoteContainer extends Component {

    state = { 
        quotesIndex: null      
    }

    componentDidMount(){
       setTimeout(() => {this.getRandomIndex()}, 400);
    }

    getRandomNumber = (min, max) => {
        let randomNumber = Math.random() * (max - min) + min;
        let randomNumberRounded =  Math.floor(randomNumber);
        return randomNumberRounded;
    }

    getRandomIndex = () => {
        let index = this.getRandomNumber(1, this.props.quotes.length)
        this.setState({
            quotesIndex: index
        })
    }



    render() {
      return (
        <div className="MoodQuoteContainer">
            {this.state.quotesIndex === null ? null : <MoodQuoteCard quote={this.props.quotes[this.state.quotesIndex]}/>}
        </div>
        )
      }
    }

export default MoodQuoteContainer;
