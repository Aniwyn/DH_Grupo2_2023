import React from "react";
import '../../assets/css/Card.css';

function ProductCard(props) {
    const url = 'http://localhost:5000' + props.product.cover_image;

    return(
        <div className="card__product">
            <h1>Ultimo producto agregado</h1>
            <img src={ url } className="card__image"></img>
            <p><strong>ID: </strong>{ props.product.id }</p>
            <p><strong>Nombre: </strong>{ props.product.name + ' ' + props.product.second_name }</p>
            <p><strong>Edicion: </strong>{ props.product.second_name }</p>
            <p><strong>Lanzamiento: </strong>{ props.product.release_date }</p>
            <p><strong>Formato: </strong>{ props.product.format.name }</p>
            <p><strong>Desarrollador : </strong>{ props.product.developer.name }</p>
            <p><strong>Precio: </strong>$ { props.product.price }</p>
            <p><strong>Clasificación PEGI: </strong>{ props.product.rating_pegi.name }</p>
            <p><strong>Clasificación ESRB: </strong>{ props.product.rating_esrb.name }</p>
            <p><strong>Generos: </strong></p>
            <ul>
                { props.product.genres.map(genre => <li>{ genre.name }</li>)}
            </ul>
            <p><strong>Plataformas: </strong></p>
            <ul>
                { props.product.platforms.map(platform => <li>{ platform.name }</li>)}
            </ul>
        </div>
    )
}

export default ProductCard