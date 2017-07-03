import React from 'react';
import Heart from './Symbols'


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

const InputWidget = (props) => <input type="text" onChange={props.update}/>
const ButtonWidget = (props) => <button>{props.children}</button>
const TitleWidget = (props) => <h1>Title: {props.text}</h1>

TitleWidget.propTypes = {
  text(props, propName, component) {
    if(!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if(props[propName].length < 6) {
      return new Error(`${propName} was too short`);
    }
  }
}

export default App
