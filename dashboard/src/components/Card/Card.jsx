import React from "react";
import '../../assets/css/Card.css';

function Card(props) {
    return(
        <div className="card__box">
            <p className="box__name">{ props.name }</p>
            <p className="box__value">{ props.value }</p>
        </div>
    )
}

export default Card