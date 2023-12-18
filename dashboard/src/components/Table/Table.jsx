import React from "react";
import '../../assets/css/Table.css';

function Card(props) {
    return(
        <div className="table">
            <div className="table__header">
                <div className="cell__header cell__id">Id</div>
                <div className="cell__header cell__name">Nombre</div>
                <div className="cell__header cell__title">Titulo</div>
                <div className="cell__header cell__developer">Desarrollador</div>
                <div className="cell__header cell__price">Precio</div>
            </div>
            {props.products.map(product => (
                <div className="table__row">
                    <div className="cell cell__id">{ product.id }</div>
                    <div className="cell cell__name">{ product.name }</div>
                    <div className="cell cell__title">{ product.second_name }</div>
                    <div className="cell cell__developer">{ product.developer.name }</div>
                    <div className="cell cell__price">$ { product.price }</div>
                </div>
            ))}
        </div>
    )
}

export default Card