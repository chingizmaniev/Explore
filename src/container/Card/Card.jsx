import React from 'react'
import './Card.css'

function Card({ item }) {

    return (
        <div className="card">
            <img src={item.photo} alt="" />
            {/* <h2>{item.title}</h2> */}
            <h2>{item.name}</h2>
            <h4>{item.price}</h4>
        </div>
    )
}

export default Card
