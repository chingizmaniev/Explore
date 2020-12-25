import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage({ item }) {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays · 26 august · to · 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                item={item}
                img="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                location="Entire house in Paris"
                title="Superbe loft -8P- Porte d'Orléans / Montrouge"
                description="8 guests · 2 bedrooms · 4 beds · 2 baths · entire home · parking · Wifi · Washing machine"
                star={4.73}
                price="$100 / night"
                total="$300 total"
            />
            <SearchResult
                item={item}
                img="https://cdn.mos.cms.futurecdn.net/qJgnxfaPmbzsYN9YdYXd6S-768-80.jpg"
                location="Entire house in Paris"
                title="Superbe loft -8P- Porte d'Orléans / Montrouge"
                description="8 guests · 2 bedrooms · 4 beds · 2 baths · entire home · parking · Wifi · Washing machine"
                star={4.73}
                price="$100 / night"
                total="$300 total"
            />
        </div>
    )
}

export default SearchPage
