import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
// import { useStateValue } from '../contexts/StateProvider';
// import { getBasketTotal } from '../contexts/reducer';
import { useStateValue } from '../contexts/StateProvider';
import { getBasketTotal } from '../contexts/reducer';


const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Итого ({basket.length} товаров): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="text" placeholder="Введите купон" /><button>Применить</button>
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Оформить заказ</button>
        </div>
    );
};

export default Subtotal;