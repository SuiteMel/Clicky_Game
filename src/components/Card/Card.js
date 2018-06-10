import React from "react";

const Card = props => (
    //<div className="card col-md-3">
        <img className="card-img col-md-3" alt={props.name} src={props.image} onClick={props.handleIncrement} />
    //</div>

);

export default Card;