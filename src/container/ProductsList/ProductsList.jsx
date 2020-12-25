import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './ProductsList.css';
import cartIconInit from '../Images/carticon0.png';
import cartIcon from '../Images/carticon.png';
import likeIconInit from '../Images/like0.png';
import likeIcon from '../Images/like.png';
// import { productsContext } from '../../contexts/ProductContext';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
// import Pagination from '../Pagination/Pagination';
import { productsContext } from '../contexts/ProductContext';
// import Header from '../Header/Header'


const ProductsList = (props) => {
    const {
        products,
        getProducts,
        checkProductInCart,
        addAndDeleteProductInCart,
        searchingProducts,
        checkProductInFavorites,
        addAndDeleteProductInFavorites,
        currentPosts
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

    // function handleClick(e){
    //     console.log(e.target.value)
    // }

    return (
        <>
            <Container>
                <div style={{ marginBottom: "40px" }}>
                    <h5 className="products-list__title">All places</h5>
                    <input value={search.get("q")} className="liveSearch" onChange={(e) => fetchParams("q", e.target.value)} type="text" placeholder="Живой поиск" />
                    <div className="block-filter-adadptive">
                        <div>
                            <select name="genre" value={search.get("genre")} id="" onChange={(e) => fetchParams("genre", e.target.value)}>
                                <option value="all">Параметры и сбросить</option>
                                <option value="entireHomes">Entire homes</option>
                                <option value="cabbinsAndCottages">Cabbins and Cottages</option>
                                <option value="appartments">Appartments</option>
                                <option value="uniqueStays">Unique Stays</option>
                            </select>
                            <select name="price" id="" value={search.get("price_lte")} onChange={(e) => fetchParams("price_lte", e.target.value)}>
                                <option value="200">До 200</option>
                                <option value="300">До 300</option>
                                <option value="400">До 400</option>
                                <option value="500">До 500</option>
                                <option value="600">До 600</option>
                                <option value="700">До 700</option>
                                <option value="800">До 800</option>
                                <option value="900">До 900</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="block-filter-page">
                    <div>
                        <div className="block-filter">
                            <h5>Filter</h5>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Type</FormLabel>
                                <RadioGroup aria-label="memory" value={search.get("genre")} name="genre" onChange={(e) => fetchParams("genre", e.target.value)}>
                                    <FormControlLabel value="all" control={<Radio />} label="Clear" />
                                    <FormControlLabel value="entireHomes" control={<Radio />} label="entireHomes" />
                                    <FormControlLabel value="cabbinsAndCottages" control={<Radio />} label="cabbinsAndCottages" />
                                    <FormControlLabel value="appartments" control={<Radio />} label="appartments" />
                                    <FormControlLabel value="uniqueStays" control={<Radio />} label="uniqueStays" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Price</FormLabel>
                                <RadioGroup aria-label="memory" value={search.get("price_lte")} name="price" onChange={(e) => fetchParams("price_lte", e.target.value)}>
                                    {/* <FormControlLabel value="all" control={<Radio />} label="All" /> */}
                                    <FormControlLabel value="200" control={<Radio />} label="200" />
                                    <FormControlLabel value="300" control={<Radio />} label="300" />
                                    <FormControlLabel value="600" control={<Radio />} label="600" />
                                    <FormControlLabel value="700" control={<Radio />} label="700" />
                                    <FormControlLabel value="900" control={<Radio />} label="900" />
                                    {/* <FormControlLabel value="1000" control={<Radio />} label="1000" />
                                    <FormControlLabel value="1200" control={<Radio />} label="1200" />
                                    <FormControlLabel value="1400" control={<Radio />} label="1400" />
                                    <FormControlLabel value="1600" control={<Radio />} label="1600" />
                                    <FormControlLabel value="1800" control={<Radio />} label="1800" />
                                    <FormControlLabel value="2000" control={<Radio />} label="2000" />
                                    <FormControlLabel value="2200" control={<Radio />} label="2200" /> */}
                                </RadioGroup>
                            </FormControl>
                            {/* <button className="filter-btn" onClick={() => getProducts(filter)}>Применить</button> */}
                        </div>
                    </div>
                    <div className="block-in-product-list">
                        <div className="products-block-in-filter-page">
                            {currentPosts.map(item => (
                                <div key={item.id} style={{ display: 'flex' }} className="product-card">
                                    <img src={item.photo} className="img-product-list" style={{ maxWidth: "25%", margin: "30px 0", borderRadius: "2%" }} alt="" />
                                    <div className="first-section-cart">
                                        <Link to={`/product-details${item.id}`}>
                                            <p className="product-card__title">{item.name}</p>
                                        </Link>
                                        <div>
                                            <p>Автор: {item.author} </p>
                                        </div>
                                        <div>
                                            <p>Жанр: {item.genre}</p>
                                        </div>
                                        <div>
                                            <p>Цена: {item.price}сом</p>
                                        </div>
                                        <div>
                                            <button onClick={() => addAndDeleteProductInCart(item)} className="btn-cart-like">
                                                <img src={checkProductInCart(item.id) ? cartIcon : cartIconInit} alt="" />
                                            </button>
                                            <button onClick={() => addAndDeleteProductInFavorites(item)} className="btn-cart-like">
                                                <img src={checkProductInFavorites(item.id) ? likeIcon : likeIconInit} alt="" />
                                            </button>
                                        </div>
                                        <div>
                                            <Link to={`/product-details${item.id}`}>
                                                <button className="product-list-btn">
                                                    Подробнее
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </div>
                {/* <Pagination /> */}
            </Container>
        </>
    );
};

export default ProductsList;