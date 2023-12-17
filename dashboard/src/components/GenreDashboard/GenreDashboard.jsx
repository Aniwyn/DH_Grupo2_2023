import React from "react";
import '../../assets/css/GenreDashboard.css';
// import Badge from "./Badge";

function GenreDashboard(props) {
    // const genres = ["Accion","Aventira","Peleas","Aventira","Peleas","Aventira","Peleas","Aventira","Peleas","Aventira","Peleas"]

    return(
        <div className="genre__box">
            <h1>Generos</h1>
            <div className="genre__content">
                {
                    // genres.map(genre =>
                    //     <Badge key={ genre.id } genre={ genre }></Badge>
                    // )
                }
            </div>

        </div>
    )
}

export default GenreDashboard