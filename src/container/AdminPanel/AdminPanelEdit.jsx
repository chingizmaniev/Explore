import React, { useContext, useEffect, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
// import { adminContext } from '../../contexts/AdminContext';
import './AdminPanelEdit.css'

const AdminPanelEdit = (props) => {

    const { productToEdit, editProduct } = useContext(adminContext)
    const [newProduct, setNewProduct] = useState(productToEdit)

    useEffect(() => {
        setNewProduct(productToEdit)
    }, [productToEdit])

    function updateProduct(e) {
        let obj = {
            ...newProduct,
            [e.target.name]: e.target.value
        }
        setNewProduct(obj)
    }

    function validateInput() {
        if (!newProduct.genre || !newProduct.name.trim() || !newProduct.author.trim() || !newProduct.price.trim() || !newProduct.description.trim() || !newProduct.photo.trim() || !newProduct.star.trim()) {
            return alert("Заполните поля!!!")
        }
        else {
            editProduct(newProduct, props.history)
        }
    }

    return (
        <>
            {newProduct ? (
                <div className="edit__panel">
                    <select defaultValue={newProduct.genre} name="genre" id="" onChange={updateProduct}>
                        <option value="">Выбрать категорию</option>
                        <option value="entireHomes">Entire homes</option>
                        <option value="cabbinsAndCottages">Cabbins and cottages</option>
                        <option value="appartments">Appartments</option>
                        <option value="uniqueStays">Unique stays</option>
                    </select>
                    <input className="inputs" value={newProduct.name} onChange={updateProduct} placeholder="название" name="name" type="text" />
                    <input className="inputs" value={newProduct.author} onChange={updateProduct} placeholder="автор" name="author" type="text" />
                    <input className="inputs" value={newProduct.price} onChange={updateProduct} placeholder="цена" name="price" type="text" />
                    <input className="inputs" value={newProduct.description} onChange={updateProduct} placeholder="описание" name="description" type="text" />
                    <input className="inputs" value={newProduct.photo} onChange={updateProduct} placeholder="фото" name="photo" type="text" />
                    <input className="inputs" value={newProduct.star} onChange={updateProduct} placeholder="star" name="star" type="text" />
                    <button className="inputs" onClick={validateInput}>Edit</button>
                </div>

            ) : (
                    <h1>loading</h1>
                )}
        </>
    );
};

export default AdminPanelEdit;