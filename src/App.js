import React from 'react';
import Heart from './Symbols'
import {InputWidget, ButtonWidget, TitleWidget} from './Widgets'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '---',
      items: []
    }
  }

  update(e) {
    this.setState({
      currentEvent: e.type
    });
  }

  componentWillMount() {
    fetch('https://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then(({results: items}) => this.setState({'items': items}))
      .catch((err) => console.log(err));
  }

  componetDidMount() {
    console.log('componetDidMount');
  }

  updateButton() {
    this.setState({
      currentEvent: 'Button clicked'
    });
  }

  render() {
    let txt = this.props.txt;
    let items = this.state.items;
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
        <ButtonWidget onClick={this.updateButton.bind(this)}>Wyślij <Heart /></ButtonWidget>
        <div>
          {items.map(item => <h4 key={item.name}>{item.name}</h4>)}
        </div>
      </div>
    )
  }
}

export default App
