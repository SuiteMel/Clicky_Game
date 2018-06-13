import React from "react";

const Card = props => (
    //<div className="card col-md-3">
        <img className="card-img col-md-3" id={props.id} dataclicked={props.clicked || "false"}  alt={props.name} src={props.image}  onClick={() => props.clickedBear(props.id)} />
    //</div>

);

export default Card;