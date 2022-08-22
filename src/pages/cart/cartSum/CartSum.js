/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './CartSum.module.scss';
import { Context } from '../../../context/Context';

const cx = classNames.bind(styles);

const CartSum = () => {
    const context = useContext(Context);

    useEffect(() => {
        const totalPrice = context.cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
        context.setTotalPrice(totalPrice);
    }, [context.cartList]);

    return (
        <div className={cx('cart-sum')}>
            <div className={cx('container')}>
                <div className={cx('code')}>
                    <input type="text" placeholder="Coupon Code" />
                    <button>Apply Code</button>
                </div>
                <div className={cx('sum')}>
                    <h3>Cart Summary</h3>
                    <div className={cx('sum-detail')}>
                        <div>
                            <span>Sub total</span>
                            <span>${context.totalPrice}</span>
                        </div>
                        <div>
                            <span>Shipping Cost</span>
                            <span>$1</span>
                        </div>
                    </div>
                    <div className={cx('total')}>
                        <h4>Grand Total</h4>
                        <h4>${context.totalPrice + 1}</h4>
                    </div>
                </div>
                <div className={cx('cart-btn')}>
                    <button className={cx('update-btn')}>Update Cart</button>
                    <button className={cx('checkout-btn')}>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartSum;
