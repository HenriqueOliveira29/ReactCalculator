import { render } from "@testing-library/react";
import React from "react";
import PropTypes from "prop-types";



export default class Display extends React.Component{
    static PropTypes ={
        value: PropTypes.string,
    }
}
render()
{
    return(
        <div className="component-display">
            <div>{this.props.value}</div>
        </div>
    )
}