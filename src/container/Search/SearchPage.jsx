import { Button } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react';
import { productsContext } from '../contexts/ProductContext';
import './SearchPage.css';
import SearchResult from './SearchResult';
import Card from '../Card/Card';
import { useHistory, Link } from 'react-router-dom';

function SearchPage({ props }) {
    const {
        getProducts,
        getProductsEntireHomes,
        getProductsCabbinsAndCottages,
        getProductsAppartments,
        getProductsUniqueStays,
        products,
        productsEntireHomes,
        productsCabbinsAndCottages,
        productsAppartments
    } = useContext(productsContext)

    const history = useHistory();
    const search = new URLSearchParams(history.location.search)
    console.log(search.get("name"))
    useEffect(() => {
        getProducts()
    }, [])

    function fetchParams(params, value) {
        if (value === 'all') {
            props.history.push('/products-list')
            props.history.push(props.location.pathname.replace(params))
            getProducts()
            return
        }
        let search = new URLSearchParams(props.history.location.search);
        search.set(params, value)
        let url = `${props.location.pathname}?${search.toString()}`
        props.history.push(url);
        getProducts()
    }

    const [state, setState] = useState(false)

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

            <div>

                {products.map(item => (
                    <Link to={`/product-details${item.id}`}>
                        <SearchResult
                            item={item}
                        />
                    </Link>
                ))}
            </div>



            {/* <SearchResult
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
                img="https://a0.muscache.com/im/pictures/8c38906d-e5f5-4a0d-b6ac-6701be790d0a.jpg?im_w=1200"
                location="Entire house in Paris"
                title="Superbe loft -8P- Porte d'Orléans / Montrouge"
                description="8 guests · 2 bedrooms · 4 beds · 2 baths · entire home · parking · Wifi · Washing machine"
                star={4.73}
                price="$100 / night"
                total="$300 total"
            />
            <SearchResult
                item={item}
                img="https://a0.muscache.com/im/pictures/852f0e9b-0970-4ff3-9bf3-a094896caf03.jpg?im_w=1200"
                location="Entire house in Paris"
                title="Superbe loft -8P- Porte d'Orléans / Montrouge"
                description="8 guests · 2 bedrooms · 4 beds · 2 baths · entire home · parking · Wifi · Washing machine"
                star={4.73}
                price="$100 / night"
                total="$300 total"
            />
            <SearchResult
                item={item}
                img="https://a0.muscache.com/im/pictures/efb1b4c1-64b2-4b07-bafb-3522d3e36d4a.jpg?im_w=1200"
                location="Entire house in Paris"
                title="Superbe loft -8P- Porte d'Orléans / Montrouge"
                description="8 guests · 2 bedrooms · 4 beds · 2 baths · entire home · parking · Wifi · Washing machine"
                star={4.73}
                price="$100 / night"
                total="$300 total"
            /> */}
        </div>
    )
}

export default SearchPage
