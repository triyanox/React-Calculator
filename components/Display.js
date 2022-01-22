import { Component } from "react/cjs/react.production.min";

class Display extends Component {
    render() {
        return (
            <div id="display" className="Display">
                {this.props.data}
            </div>
        );
    }
}

export default Display;