import React, { Component } from 'react'
import MoodQuoteCard from '../Components/MoodQuoteCard'
import '../App.css'

class MoodQuoteContainer extends Component {

    state = { 
        currentQuote: ''        
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){
        this.getRandomQuote();
    }

  getRandomNumber = (min, max) => {
    let randomNumber = Math.random() * (max - min) + min;
    let randomNumberRounded =  Math.floor(randomNumber);
    return randomNumberRounded;
  }

  getRandomQuote = () => {
    if (this.props.quotes.length === 0) {
      return null
    } else {
      let randomQuoteIndex = this.getRandomNumber(1, this.props.quotes.length);
      let randomQuote = this.props.quotes[randomQuoteIndex];
      console.log(randomQuote);
      return this.props.quotes[randomQuoteIndex];
    }
  }

   quoteCardManager = () => {
    if (this.props.quotes.length === 0) {
      return null
    } else {
        let Quote = this.getRandomQuote();
        this.setState({
            currentQuote: Quote
        })
    }
  } 

render() {
  return (
    <div>
    <MoodQuoteCard quote={this.state.currentQuote} />
    </div>
    )
  }
}

export default MoodQuoteContainer;
