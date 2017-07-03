import React from 'react';

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
        <h1>Hi :)</h1>
        <b>Bold</b>
        <p>{txt}</p>
        <InputWidget update={this.update.bind(this)} />
        <p>{this.state.myTxt}</p>
      </div>
    )
  }
}

const InputWidget = (props) => <input type="text" onChange={props.update}/>

export default App
