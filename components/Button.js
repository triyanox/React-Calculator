import { Component } from "react/cjs/react.production.min";

class Button extends Component {
    render() {
        return (
            <div
                className="Button"
                onClick={this.props.onClick}
                data-value={this.props.value}>
                {this.props.label}
            </div>
        );
    }
}

export default Button;