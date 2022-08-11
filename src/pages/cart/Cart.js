import React from 'react';

import CartItem from './cartItem/CartItem';
import CartSum from './cartSum/CartSum';

const Cart = () => {
    return (
        <div style={{ backgroundColor: '#f3f6ff' }}>
            <div style={{ width: '95%', margin: '0 auto', padding: '30px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <CartItem />
                    <CartSum />
                </div>
            </div>
        </div>
    );
};

export default Cart;
