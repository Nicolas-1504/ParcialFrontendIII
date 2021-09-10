import { Component } from "react";

export default class Botones extends Component {

    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={() => this.props.handleChangeButtonA()}>A</button>
                    <h2>{this.props.data[this.props.dataA].opciones.a}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={() => this.props.handleChangeButtonB()}>B</button>
                    <h2>{this.props.data[this.props.dataB].opciones.b}</h2>
                </div>
            </div>
        )
    }

}