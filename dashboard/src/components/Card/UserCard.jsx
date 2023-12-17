import React from "react";
import '../../assets/css/Card.css';

function UserCard(props) {
    const user = {
        id: 1,
        name: "nombre",
        user_name: "debajo del nombre",
        email: "asd@asd.asd",
    }

    return(
        <div className="card__user">
            <h1>Ultimo usuario registrado</h1>
            <p><strong>ID: </strong>{ user.id }</p>
            <p><strong>Nombre: </strong>{ user.name }</p>

        </div>
    )
}

export default UserCard