import React, { Component } from 'react';
import MoodQuoteContainer from '../Containers/MoodQuotesContainer'
import '../App.css'
import MoodImageContainer from '../Containers/MoodImageContainer';
import MoodNewsContainer from '../Containers/MoodNewsContainer';

export default class HappyMoodPage extends Component {

    state = {
    currentMood : 'Happy',
    moodImages : [],
    moodNews: [],
    moodQuotes: [],
    }

    componentDidMount() {
        this.getHappyQuotes();
        this.getHappyImages();
        this.getHappyNews();
        document.querySelector('body').style.backgroundColor = "#FFD850";
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

      render(){
          return(
              <div>
                  <MoodQuoteContainer quotes={this.state.moodQuotes} />
                  <MoodImageContainer images={this.state.moodImages} />
                  <MoodNewsContainer news={this.state.moodNews} />
              </div>
          )
      }
}