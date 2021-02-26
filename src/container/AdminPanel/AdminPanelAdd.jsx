import React, { useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
import './AdminPanelAdd.css'

const AdminPanelAdd = (props) => {
    const { addProduct } = useContext(adminContext)
    const [product, setProduct] = useState({})

    const createNewProduct = (e) => {
        let newObj = {
            ...product,
            comments: [],
            likes: 0,
            [e.target.name]: e.target.value
        }
        setProduct(newObj)
    }
    console.log(product)

    function validateInput() {
        if (!product.genre || !product.name.trim() || !product.author.trim() || !product.price.trim() || !product.description.trim() || !product.photo.trim() || !product.star.trim()) {
            return alert("Fill out all fields!!")
        }
        else {
            addProduct(product, props.history)
        }
    }

    return (

        <div className="add__panel">
            <select name="genre" id="" onChange={createNewProduct}>
                <option value="">Select category</option>
                <option value="entireHomes">Entire homes</option>
                <option value="cabbinsAndCottages">Cabbins and cottages</option>
                <option value="appartments">Appartments</option>
                <option value="uniqueStays">Unique stays</option>
            </select>
            <input className="inputs" onChange={createNewProduct} placeholder="name" name="name" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="hosted by" name="author" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="price" name="price" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="description" name="description" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="photo" name="photo" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="star" name="star" type="text" />
            <button className="inputs" onClick={validateInput}>Add</button>
        </div>
    );
};

export default AdminPanelAdd;