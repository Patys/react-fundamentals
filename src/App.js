import React from 'react';
import Heart from './Symbols'
import {InputWidget, ButtonWidget, TitleWidget} from './Widgets'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myTxt: 'Patryk wita świat :D'
    }
  }

  update(e) {
    this.setState({myTxt: e.target.value});
  }

  render() {
    let txt = this.props.txt;
    return (
      <div>
        <TitleWidget text="Nauka react'a"/>
        <h1>Hi :)</h1>
        <b>Bold</b>
        <p>{txt}</p>
        <InputWidget update={this.update.bind(this)} />
        <p>{this.state.myTxt}</p>
        <ButtonWidget>Wyślij <Heart /></ButtonWidget>
      </div>
    )
  }
}

export default App
