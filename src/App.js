import { render } from "@testing-library/react";
import React from "react";
import Display from "./comps/Display";
import ButtonPanel from "./comps/ButtonPanel";
import "./App.css";
import calculate from "./logic/calculate";

export default class APP extends React.Component
{
  state = {
    total:null,
    next: null,
    operation: null
  };
  
  handleClick = buttonName =>{
    this.setState(calculate(this.state,buttonName));
  }

  render()
  {
    return(
      <div className="component-app">
          <Display value={this.state.next || this.state.total || "0"}></Display>
          <ButtonPanel clickHandler = {this.handleClick}></ButtonPanel>
      </div>
    );
  }
}
