import React, {Component} from "react";
import '../css/App.css';

class Dialpad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0.0
        };
    }

    render() {
        return (
            <div className="grid">
                <div>
                    <button className="dial" onClick={() => this.props.Addtodisplay("0")}>
                        0
                    </button>
                    <button className="dial" onClick={() => this.props.Addtodisplay("1")}>
                        1
                    </button>
                    <button className="dial" onClick={() => this.props.Addtodisplay("2")}>
                        2
                    </button>
                    <button className="dial" onClick={() => this.props.Addtodisplay("3")}>
                        3
                    </button>
                    <button className="dial" onClick={() => this.props.Addtodisplay("4")}>
                        4
                    </button>
                    <button className="dial" onClick={() => this.props.Addtodisplay("5")}>
                        5
                    </button>
                    <button className="dial" onClick={() => this.props.Addtodisplay("6")}>
                        6
                    </button>
                    <button className="dial" onClick={() => this.props.Addtodisplay("7")}>
                        7
                    </button>
                    <button className="dial" onClick={() => this.props.Addtodisplay("8")}>
                        8
                    </button>
                    <button className="dial" onClick={() => this.props.Addtodisplay("9")}>
                        9
                    </button>
                </div>
                <div>
                    <button className="dial" onClick={() => this.props.Cleardisplay()}>
                        clear
                    </button>
                    <button className="dial" onClick={() => this.props.Clearall()}>
                        full clear
                    </button>
                </div>
            </div>
        ); //end return
    } //end render
} //end class

export default Dialpad;