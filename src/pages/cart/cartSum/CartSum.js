import React from 'react';
import classNames from 'classnames/bind';

import styles from './CartSum.module.scss';

const cx = classNames.bind(styles);

const CartSum = () => {
    return (
        <div className={cx('cart-sum')}>
            <div className={cx('container')}></div>
        </div>
    );
};

export default CartSum;
