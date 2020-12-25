import React from 'react';
import { getBasketTotal } from '../contexts/reducer';
import { useStateValue } from '../contexts/StateProvider';
import Header from '../Header/Header';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <div>
                        <h2 className="checkout__title">Ваша корзина</h2>


                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                        {/* CheckoutProduct*/}
                        {/* CheckoutProduct*/}
                        {/* CheckoutProduct*/}
                        {/* CheckoutProduct*/}
                    </div>
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>


            </div>
        </>
    );
};

export default Checkout;