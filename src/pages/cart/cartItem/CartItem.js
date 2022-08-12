import { useContext } from 'react';
import classNames from 'classnames/bind';
import { Delete } from '@mui/icons-material';

import styles from './CartItem.module.scss';
import { Context } from '../../../context/Context';

const cx = classNames.bind(styles);

const CartItem = ({ item }) => {
    const context = useContext(Context);

    return (
        <div className={cx('cart-item')}>
            <div className={cx('product')} style={{ flex: 2 }}>
                <img src={item.imgUrl} alt={item.productName} />
                <p>{item.productName}</p>
            </div>
            <div className={cx('price')}>${item.price}</div>
            <div className={cx('quantity')}>
                <button onClick={() => context.decreaseAndRemoveCartItem(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => context.addAndIncreaseCartItem(item)}>+</button>
            </div>
            <div className={cx('total')}>
                <span>${item.price * item.quantity}</span>
            </div>
            <div className={cx('delete')}>
                <span onClick={() => context.removeCartItem(item)}>
                    <Delete className={cx('icon')} />
                </span>
            </div>
        </div>
    );
};

export default CartItem;
