import './App.css';
import React from "react";

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';


function App(props) {
    return (
        <div className="App">
            <Card titulo="Card é Legal">
                <Primeiro />
            </Card>
            <Card titulo="Card é muito Legal">
            <ComParametro titulo="Homem Aranha" subtitulo="Sem casa"/>
            </Card>
            <Card titulo="MasterClass">
                <ComParametro titulo="Parou aqui" subtitulo="https://youtu.be/XQxitgyZ_S4?t=1492"></ComParametro>
            </Card>
            <Card titulo="Com Filhos">
                <ComFilhos>
                    <ul>
                        <li>Foi</li>
                        <li>Assim</li>
                        <li>Que eu</li>
                    </ul>
                </ComFilhos>                
            </Card>
            <Card titulo="Repetir é top">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="Condicional">
                <Condicional numero={11}></Condicional>
            </Card>
            
        </div>
    )
}


export default App;

