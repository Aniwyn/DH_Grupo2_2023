import React from "react";
import '../../assets/css/Card.css';

function UserCard(props) {
    const url = 'http://localhost:5000/images/upload/' + props.user.avatar;

    return(
        <div className="card__user">
            <h1>Ultimo usuario registrado</h1>
            <img src={ url } className="card__image"></img>
            <p><strong>ID: </strong>{ props.user.id }</p>
            <p><strong>Nombre: </strong>{ props.user.name }</p>
            <p><strong>Nombre de usuario: </strong>{ props.user.user_name }</p>
            <p><strong>Email: </strong>{ props.user.email }</p>

        </div>
    )
}

export default UserCard