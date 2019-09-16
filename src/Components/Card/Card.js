import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props)
    return(
        <div className="Card">
            <h3>Task #{props.cardId}</h3>
            <p>{props.taskText}</p>
        </div>
    ) 
}


export default Card;