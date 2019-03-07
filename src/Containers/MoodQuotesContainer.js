import React, { Component } from 'react'
import MoodQuoteCard from '../Components/MoodQuoteCard'
import '../App.css'

class MoodQuoteContainer extends Component {

    state = { 
        quotesIndex: ''       
    }

    componentDidMount(){
       setTimeout(() => {this.getRandomIndex()}, 90);
    }

    getRandomNumber = (min, max) => {
        let randomNumber = Math.random() * (max - min) + min;
        let randomNumberRounded =  Math.floor(randomNumber);
        return randomNumberRounded;
    }

    getRandomIndex = () => {
        let index = this.getRandomNumber(1, this.props.quotes.length)
        console.log(index);
        this.setState({
            quotesIndex: index
        })
    }



    render() {
        console.log(this.props.quotes[this.state.quotesIndex])
      return (
        <div>
            {this.state.quotesIndex.length === 0 ? null : <MoodQuoteCard quote={this.props.quotes[this.state.quotesIndex]}/>}
        </div>
        )
      }
    }

export default MoodQuoteContainer;
