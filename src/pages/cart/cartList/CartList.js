import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './CartList.module.scss';
import { Context } from '../../../context/Context';
import CartItem from '../cartItem/CartItem';

const cx = classNames.bind(styles);

const CartList = () => {
    const context = useContext(Context);

    return (
        <>
            {context.cartList.length > 0 ? (
                <div className={cx('cart-list')}>
                    <div className={cx('container')}>
                        <div className={cx('cart-row')}>
                            <div style={{ flex: 2 }}>products</div>
                            <div>price</div>
                            <div>quantity</div>
                            <div>total</div>
                            <div>remove</div>
                        </div>
                        {context.cartList.map((item, i) => (
                            <CartItem key={i} item={item} />
                        ))}
                    </div>
                </div>
            ) : (
                'Your cart is empty'
            )}
        </>
    );
};

export default CartList;
