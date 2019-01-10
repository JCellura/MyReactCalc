import React, {Component} from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";
import Button from "../Button";

class ButtonPanel extends Component {

    handleClick = (buttonName, buttonClass) => {
        this.props.clickHandler(buttonName, buttonClass);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="AC" clickHandler={this.handleClick}/>
                    <Button name="+/-" className="operator" clickHandler={this.handleClick}/>
                    <Button name="%" className="operator" clickHandler={this.handleClick}/>
                    <Button name="÷" className="operator" clickHandler={this.handleClick} orange/>
                </div>

                <div>
                    <Button name="7" className="number" clickHandler={this.handleClick}/>
                    <Button name="8" className="number" clickHandler={this.handleClick}/>
                    <Button name="9" className="number" clickHandler={this.handleClick}/>
                    <Button name="x" className="operator" clickHandler={this.handleClick} orange/>
                </div>

                <div>
                    <Button name="4" className="number" clickHandler={this.handleClick}/>
                    <Button name="5" className="number" clickHandler={this.handleClick}/>
                    <Button name="6" className="number" clickHandler={this.handleClick}/>
                    <Button name="-" className="operator" clickHandler={this.handleClick} orange/>
                </div>

                <div>
                    <Button name="1" className="number" clickHandler={this.handleClick}/>
                    <Button name="2" className="number" clickHandler={this.handleClick}/>
                    <Button name="3" className="number" clickHandler={this.handleClick}/>
                    <Button name="+" className="operator" clickHandler={this.handleClick} orange/>
                </div>

                <div>
                    <Button name="0" className="number" clickHandler={this.handleClick} wide/>
                    <Button name="." className="number" clickHandler={this.handleClick}/>
                    <Button name="=" clickHandler={this.handleClick} orange/>
                </div>
            </div>
        )
    }
}

export default ButtonPanel