import datos from './data.json';
import { Component } from "react";
import Botones from './Botones';
import Historial from './Historial';

const array = [];
let contador = 0; 

export default class Layout extends Component {

    constructor(props){
        super(props)
        this.state = {
            datos: [],
            historia: 0,
            botonA: 0,
            botonB: 0,
            historial: ""
        }
    }

    componentWillMount(){
        this.setState({
            datos
        })
    }

    componentDidUpdate(prevState){
        if(prevState.historia !== this.state.historia){
            array.push(this.state.historial);
        }
    }

    handleChangeButtonA = () => {
        if (contador === 0) {
            contador++
        }else if (contador === 7 || contador === 8) {
            alert('Fin.');
        }else if (contador % 2 !== 0){
            contador = contador + 2;
        }else if (contador % 2 === 0) {
            contador = contador + 1;
        }
        this.setState({
            historia: contador, 
            botonA: contador,
            botonB: contador,
            historial: "A"
        })   
    }

    handleChangeButtonB = () => {
        if (contador === 0) {
            contador = contador + 2;
        }else if (contador === 7 || contador === 8) {
            alert('Fin.');
        }
        else if (contador % 2 === 0) {
            contador = contador + 2;
        }else if (contador % 2 !== 0) {
            contador = contador +3;
        }
        this.setState({
            historia: contador,
            botonA: contador,
            botonB: contador,
            historial: "B"
        })  
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{datos[this.state.historia].historia}</h1>
                <Botones data={this.state.datos} dataA={this.state.botonA} dataB={this.state.botonB} handleChangeButtonA={this.handleChangeButtonA} handleChangeButtonB={this.handleChangeButtonB} />
                <Historial data={this.state.historial} historial={array.map((e, i) => <li key={i}>{e}</li>)} />
            </div>
        )
    }
}

