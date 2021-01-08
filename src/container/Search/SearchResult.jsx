import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import { Card } from '@material-ui/core';

function SearchResult({
    // img,
    item,
    // location,
    // title,
    // description,
    // price,
    // total
}) {
    return (
        <div className="searchResult">
            <img src={item.photo} alt="" />
            <FavoriteBorderIcon
                className="searchResult__heart" />

            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{item.name}</p>
                    <h3>{item.author}</h3>
                    <h3>{item.genre}</h3>
                    <p>____</p>
                    <p>{item.description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon
                            className="searchResult__star" />
                        <p>
                            <strong>{item.star}</strong>
                        </p>
                    </div>
                    <div className="searchResult__price">
                        <h2>{item.price}</h2>
                        {/* <p>{total}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
