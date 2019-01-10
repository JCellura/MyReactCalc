import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends Component {

    state = {
        firstNumber: "",
        secondNumber: "",
        isOperatorChosen: false,
        operator: ""
    }

    handleButtonClick = () => {
        this.props.clickHandler(this.props.name, this.props.className);
        // // console.log(this.props.name);

        // if (this.props.className === "number") {
        //     if (this.state.isOperatorChosen === false) {
        //         this.setState({firstNumber: this.state.firstNumber + this.props.name});
        //         console.log("hello",this.state);
        //     }
        //     else if (this.state.isOperatorChosen === true) {
        //         this.setState({secondNumber: this.state.secondNumber + this.props.name});
        //         console.log("2",this.state);
        //     }
        // }
        // else if (this.props.className === "operator") {
        //     console.log(this.props.name);
        //     this.setState({isOperatorChosen: true});
        //     console.log(this.state);
        // }
        
    }

    render() {

        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : ""
        ];

        return (
            <div className={className.join(" ").trim()}>
                <button 
                    className={this.props.className} 
                    name={this.props.name} 
                    onClick={this.handleButtonClick}>{this.props.name}</button>
            </div>
        )
    }
}

Button.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func
}

export default Button;