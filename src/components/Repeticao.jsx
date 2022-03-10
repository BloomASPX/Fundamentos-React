import React from "react";

import products from "../data/products";

function Repeticao(props) {

    function getProdutosListItem() {
        return products.map(prod => {
            return (
                <li key={prod.id}>
                    {prod.id} - {prod.name} - R$ {prod.preco}
                </li>
            )
        })
    }

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}


export default Repeticao;