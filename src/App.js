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
        <input type="text" onChange={this.update.bind(this)}/>
        <p>{this.state.myTxt}</p>
      </div>
    )
  }
}

export default App
