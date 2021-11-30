import { render } from "@testing-library/react";
import React from "react";
import PropTypes from "prop-types";
import "./index.css";



export default class Display extends React.Component{
    static propTypes ={
        value: PropTypes.string,
    }

render()
{
    return(
        <div className="component-display">
            <div>{this.props.value}</div>
        </div>
    )
}
}