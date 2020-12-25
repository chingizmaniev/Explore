// import { Card } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import { adminContext } from '../contexts/AdminContext';
import { productsContext } from '../contexts/ProductContext';
// import { productsContext } from '../contexts/ProductContext';
import './Home.css'

function Home() {
    const { getProductsEntireHomes, getProductsCabbinsAndCottages, getProductsAppartments, getProductsUniqueStays, productsEntireHomes, productsCabbinsAndCottages, productsAppartments } = useContext(productsContext)

    useEffect(() => {
        getProductsEntireHomes()
        getProductsCabbinsAndCottages()
        getProductsAppartments()
        getProductsUniqueStays()
    }, [])

    return (
        <div className="home">
            <Banner />
            <div className="category">
                <h3>Entire Homes</h3>
            </div>
            <div className="home__section">
                {productsEntireHomes.map(item => (
                    <Card
                        item={item}
                    />
                ))}
            </div>
            <div className="category">
                <h3>Cabbins and Cottages</h3>
            </div>
            <div className="home__section">
                {productsCabbinsAndCottages.map(item => (
                    <Card
                        item={item}
                    />
                ))}
            </div>

            <div className="category">
                <h3>Appartments</h3>
            </div>
            <div className="home__section">
                {productsAppartments.map(item => (
                    <Card
                        item={item}
                    />
                ))}
            </div>

        </div>
    )
}

export default Home
