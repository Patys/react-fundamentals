import React from 'react';
import Heart from './Symbols'
import {InputWidget, ButtonWidget, TitleWidget} from './Widgets'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '---'
    }
  }

  update(e) {
    this.setState({
      currentEvent: e.type
    });
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componetDidMount() {
    console.log('componetDidMount');
  }

  render() {
    let txt = this.props.txt;
    return (
      <div>
        <TitleWidget text="Nauka react'a"/>
        <h1>Hi :)</h1>
        <b>Bold</b>
        <p>{txt}</p>
        <textarea
          onKeyPress={this.update.bind(this)}
          onCopy={this.update.bind(this)}
          onCut={this.update.bind(this)}
          onPaste={this.update.bind(this)}
          onFocus={this.update.bind(this)}
          onBlur={this.update.bind(this)}
          onDoubleClick={this.update.bind(this)}
          onTouchStart={this.update.bind(this)}
          onTouchMove={this.update.bind(this)}
          onTouchEnd={this.update.bind(this)}
          cols="30"
          rows="10" />
        <p>{this.state.currentEvent}</p>
        <ButtonWidget>Wyślij <Heart /></ButtonWidget>
      </div>
    )
  }
}

export default App
