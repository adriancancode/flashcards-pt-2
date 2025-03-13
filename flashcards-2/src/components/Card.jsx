import React from "react";
import '../Card.css';

function Card({question}) {
    return (
        <div className="card-body">
            <h2>{question}</h2>
        </div>
    )
}

export default Card;