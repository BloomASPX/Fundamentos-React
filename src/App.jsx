import React from "react";

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';

function App(props) {
    return (
        <div className="App">
            <Card titulo="Card é Legal">
                <Primeiro />
            </Card>
            <Card titulo="Card é Legal">
            <ComParametro titulo="Homem Aranha" subtitulo="Sem casa"/>
            </Card>
            <Card>
                <ComParametro titulo="Parou aqui" subtitulo="https://youtu.be/XQxitgyZ_S4?t=1492"></ComParametro>
            </Card>
            <ComFilhos>
                <ul>
                    <li>Mas</li>
                    <li>Bah</li>
                    <li>Tche</li>
                </ul>
            </ComFilhos>
        </div>
    )
}


export default App;

