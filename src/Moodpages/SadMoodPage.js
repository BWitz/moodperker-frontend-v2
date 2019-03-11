import React, { Component } from 'react';
import MoodQuoteContainer from '../Containers/MoodQuotesContainer'
import '../App.css'
import MoodImageContainer from '../Containers/MoodImageContainer';
import MoodNewsContainer from '../Containers/MoodNewsContainer';

export default class SadMoodPage extends Component {

    state = {
    currentMood : 'Sad',
    moodImages : [],
    moodNews: [],
    moodQuotes: [],
    }

    componentDidMount() {
        this.getSadQuotes();
        this.getSadImages();
        this.getSadNews();
        document.querySelector('body').style.backgroundColor = "#90BAFF";
    }

    getSadImages = () => {
        fetch('https://moodperker-rails-api.herokuapp.com/api/v1/sadimgs')
        .then(res => res.json())
        .then(sadImages => {
          this.setState({
            moodImages: sadImages
          })
        })
      }
    
      getSadNews = () => {
        fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/sadnews`)
        .then(res => res.json())
        .then(sadNews =>
          this.setState({
            moodNews: sadNews
          })
        )
      }
    
      getSadQuotes = () => {
        fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/sadquotes`)
        .then(res => res.json())
        .then(sadQuotes => {
          this.setState({
            moodQuotes: sadQuotes
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