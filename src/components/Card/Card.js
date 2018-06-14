import React from "react";

const Card = props => (
        <img className="card-img col-md-3" id={props.id}  alt={props.name} src={props.image}  onClick={() => props.clickedBear(props.id)} />

);

export default Card;