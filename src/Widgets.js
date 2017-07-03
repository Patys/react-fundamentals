import React from 'react';

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

export {InputWidget, ButtonWidget, TitleWidget}
