import React from 'react';
import classNames from 'classnames/bind';

import styles from './CartItem.module.scss';

const cx = classNames.bind(styles);

const CartItem = () => {
    return (
        <div className={cx('cart-item')}>
            <div className={cx('container')}>
                <div className={cx('cart-header')}></div>
            </div>
        </div>
    );
};

export default CartItem;
