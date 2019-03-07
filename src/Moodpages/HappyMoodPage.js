import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import MoodQuoteContainer from '../Containers/MoodQuotesContainer'
import '../App.css'

export default class HappyMoodPage extends Component {

    state = {
    currentMood : 'Happy',
    moodImages : [],
    moodNews: [],
    moodQuotes: [],
    }

    componentDidMount() {
        this.getHappyQuotes();
    }

    getHappyImages = () => {
        fetch('https://moodperker-rails-api.herokuapp.com/api/v1/happyimgs')
        .then(res => res.json())
        .then(happyImages => {
          this.setState({
            moodImages: happyImages
          })
        })
      }
    
      getHappyNews = () => {
        fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/happynews`)
        .then(res => res.json())
        .then(happyNews =>
          this.setState({
            moodNews: happyNews
          })
        )
      }
    
      getHappyQuotes = () => {
        fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/happyquotes`)
        .then(res => res.json())
        .then(happyQuotes => {
          this.setState({
            moodQuotes: happyQuotes
          })
        })
      }
    
      colorHandler = () => {
        switch(this.state.currentMood) {
          case 'Happy':
            document.querySelector('body').style.backgroundColor = "#FFD850";
            break;
            default:
            console.log('no color!')
        }
      }

      render(){
          return(
              <div>
                  <MoodQuoteContainer quotes={this.state.moodQuotes} />
              </div>
          )
      }
}