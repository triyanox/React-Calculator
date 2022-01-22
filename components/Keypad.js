import { Component } from "react/cjs/react.production.min";


class Keypad extends Component {
    render() {
        return (
            <div className="Keypad">
                {this.props.children}
            </div>
        );
    }
}

export default Keypad;