import './index.css';
import React from "react";
import ReactDOM from "react-dom";

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Homem Aranha" subtitulo="Sem casa"></ComParametro>
    </div>,
    
    document.getElementById('root')
)