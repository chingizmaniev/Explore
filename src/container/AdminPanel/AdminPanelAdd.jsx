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
        if (!product.genre || !product.name.trim() || !product.author.trim() || !product.price.trim() || !product.description.trim() || !product.photo.trim()) {
            return alert("Заполните поля!!!")
        }
        else {
            addProduct(product, props.history)
        }
    }

    return (

        <div className="add__panel">
            <select name="genre" id="" onChange={createNewProduct}>
                <option value="">Выбрать категорию</option>
                <option value="entireHomes">Entire homes</option>
                <option value="cabbinsAndCottages">Cabbins and cottages</option>
                <option value="appartments">Appartments</option>
                <option value="uniqueStays">Unique stays</option>
            </select>
            <input className="inputs" onChange={createNewProduct} placeholder="название" name="name" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="автор" name="author" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="цена" name="price" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="описание" name="description" type="text" />
            <input className="inputs" onChange={createNewProduct} placeholder="фото" name="photo" type="text" />
            <button className="inputs" onClick={validateInput}>Add</button>
        </div>
    );
};

export default AdminPanelAdd;