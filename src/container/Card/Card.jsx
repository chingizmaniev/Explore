import React from 'react'
import './Card.css'

function Card({ item }) {

    return (
        <div className="card">
            <img src={item.photo} alt="" />
            <h2>{item.title}</h2>
            <h4>{item.description}</h4>
            <h3>{item.price}</h3>
        </div>
    )
}

export default Card
