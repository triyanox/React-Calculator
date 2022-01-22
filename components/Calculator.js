import { Component } from "react/cjs/react.production.min";
import Button from "./Button";
import Display from "./Display";
import Keypad from "./Keypad";
import Footer from "./Footer";
class Calculator extends Component {
    constructor() {
        super();
        this.state = { data: '' }
    }

    calculate = () => {
        try {
            const result = eval(this.state.data);
            this.setState({ data: result });
        } catch (e) {
            this.setState({ data: 'Math Error' })
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                this.setState({ data: '' });
                break;
            case 'equal':
                this.calculate();
                break;
            default:
                this.setState({ data: this.state.data + value });
        }
    }
    render() {
        return (
            <div className="container">
                <div class='box'>
                    <div class='wave'></div>
                </div>
                <div className="Calculator">
                    <Display data={this.state.data} />
                    <Keypad>
                        <div class="div1" id="zero"><Button onClick={this.handleClick} label="0" value="0" /></div>
                        <div class="div2" id="one"><Button onClick={this.handleClick} label="1" value="1" /></div>
                        <div class="div3" id="two"><Button onClick={this.handleClick} label="2" value="2" /></div>
                        <div class="div4" id="three"><Button onClick={this.handleClick} label="3" value="3" /></div>
                        <div class="div5 " id="four"><Button onClick={this.handleClick} label="4" value="4" /></div>
                        <div class="div6" id="five"><Button onClick={this.handleClick} label="5" value="5" /></div>
                        <div class="div7" id="six"><Button onClick={this.handleClick} label="6" value="6" /></div>
                        <div class="div8" id="seven"><Button onClick={this.handleClick} label="7" value="7" /></div>
                        <div class="div9" id="eight"><Button onClick={this.handleClick} label="8" value="8" /></div>
                        <div class="div10" id="nine"><Button onClick={this.handleClick} label="9" value="9" /></div>
                        <div class="div11" id="decimal"><Button onClick={this.handleClick} label="." value="." /></div>
                        <div class="div12" id="equals"><Button onClick={this.handleClick} label="=" value="equal" /></div>
                        <div class="div13" id="add"><Button onClick={this.handleClick} label="+" value="+" /></div>
                        <div class="div14" id="subtract"><Button onClick={this.handleClick} label="-" value="-" /></div>
                        <div class="div15" id="multiply"><Button onClick={this.handleClick} label="x" value="*" /></div>
                        <div class="div16" id="divide"><Button onClick={this.handleClick} label="/" value="/" /></div>
                        <div class="div17" id="clear"><Button onClick={this.handleClick} label="C" value="clear" /></div>
                        <div class="div18"></div>
                    </Keypad>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Calculator;