import React, { Component } from 'react';
import MoodQuoteContainer from '../Containers/MoodQuotesContainer'
import '../App.css'
import MoodImageContainer from '../Containers/MoodImageContainer';
import MoodNewsContainer from '../Containers/MoodNewsContainer';

export default class BoredMoodPage extends Component {

    state = {
    currentMood : 'Bored',
    moodImages : [],
    moodNews: [],
    moodQuotes: [],
    }

    componentDidMount() {
        this.getBoredQuotes();
        this.getBoredImages();
        this.getBoredNews();
        document.querySelector('body').style.backgroundColor = "#6EFF97";
    }

    getBoredImages = () => {
        fetch('https://moodperker-rails-api.herokuapp.com/api/v1/boredimgs')
        .then(res => res.json())
        .then(boredImages => {
          this.setState({
            moodImages: boredImages
          })
        })
      }
    
      getBoredNews = () => {
        fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/borednews`)
        .then(res => res.json())
        .then(boredNews =>
          this.setState({
            moodNews: boredNews
          })
        )
      }
    
      getBoredQuotes = () => {
        fetch(`https://moodperker-rails-api.herokuapp.com/api/v1/boredquotes`)
        .then(res => res.json())
        .then(boredQuotes => {
          this.setState({
            moodQuotes: boredQuotes
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