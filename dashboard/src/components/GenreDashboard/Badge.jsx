import React from "react";
import '../../assets/css/GenreDashboard.css';

function Badge(props) {
    return(
        <div className="badge__box">
            { props.genre }            
        </div>
    )
}

export default Badge