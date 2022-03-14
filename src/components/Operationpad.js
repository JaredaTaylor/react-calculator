import React, {Component} from "react";
import '../css/App.css';

class Operationpad extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0.0
        };
    }
    */

    render() {
        return (
            <div className="grid">
                <div>
                    <button className="dial" onClick={() => this.props.Add()}>
                        +
                    </button>
                    <button className="dial" onClick={() => this.props.Subtract()}>
                        -
                    </button>
                    <button className="dial" onClick={() => this.props.Divide()}>
                        /
                    </button>
                    <button className="dial" onClick={() => this.props.Multiply()}>
                        x
                    </button>
                    <button className="dial" onClick={() => this.props.Mod()}>
                        %
                    </button>
                </div>
                <div>
                    <button className="dial" onClick={() => this.props.Equals()}>
                        =
                    </button>
                </div>
            </div>
        ); //end return
    } //end render
} //end class

export default Operationpad;