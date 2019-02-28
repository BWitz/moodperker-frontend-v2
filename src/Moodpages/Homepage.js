import React, { Component } from 'react';

export default class Homepage extends Component {

    state = {
        currentMood: ""
    }

    changeHandler = (event)=> {
        this.setState({
            currentMood: event.target.value
        })
    }

    titleHandler = () => {
        switch(this.state.currentMood) {
          case 'Happy':
            return "title happyTitle"
          case 'Sad':
            return "title sadTitle"
          case 'Bored':
            return "title boredTitle"
          default:
            return "title"
        }
      }
  
    render() {
        return(
            <div>
                <div className="MoodSelect">
                    <h1 className={this.titleHandler()}><u>MoodPerker</u></h1>
                    <br />
                    <h3 className="secondaryTitle">How are you?</h3>
                    <select className = 'select-thingy' value={this.state.currentMood} onChange={event => this.changeHandler(event)}>
                    <option value="">I feel..</option>
                    <option value="Happy" name="Happy"> Happy </option>
                    <option value="Sad" name="Sad"> Sad </option>
                    <option value="Bored" name="Bored"> Bored </option>
                    </select>
                </div>
            </div>
        )
    }

}