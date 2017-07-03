import React from 'react';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return (
      <div>
        <h1>Hi :)</h1>
        <b>Bold</b>
        <p>{txt}</p>
      </div>
    )
  }
}

export default App
