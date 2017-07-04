import React from 'react';
import ReactDOM from 'react-dom';
import Heart from './Symbols';
import {InputWidget, ButtonWidget, TitleWidget, PersonWidget} from './Widgets';

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

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  updateButton() {
    this.setState({
      currentEvent: 'Button clicked'
    });
  }

  updateButtonProps() {
    ReactDOM.render(<App val={this.props.val+1}/>, document.getElementById('root'));
  }

  filter(e) {
    this.setState({filter: e.target.value});
  }

  render() {
    let txt = this.props.txt;
    let items = this.state.items;

    if(this.state.filter) {
      items = items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    }

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
        <button onClick={this.updateButtonProps.bind(this)}>{this.props.val}</button>
        <InputWidget update={this.filter.bind(this)} />
        <div>
          {items.map(item => <PersonWidget key={item.name} person={item}/>)}
        </div>
      </div>
    )
  }
}

App.defaultProps = {
  val: 0
}

export default App
