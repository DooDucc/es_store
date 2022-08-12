import { useContext } from 'react';
import classNames from 'classnames/bind';
import { Star, ShoppingCart, Favorite, Search } from '@mui/icons-material';

import styles from './ProductCard.module.scss';
import { Context } from '../../context/Context';

const cx = classNames.bind(styles);

const ProductCard = ({ item }) => {
    const context = useContext(Context);

    return (
        <div className={cx('product-card')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <p>{item.productName}</p>
                    <div className={cx('icons')}>
                        <Star className={cx('icon')} />
                        <Star className={cx('icon')} />
                        <Star className={cx('icon')} />
                        <Star className={cx('icon')} />
                        <Star className={cx('icon')} />
                    </div>
                </div>
                <div className={cx('mid')}>
                    <img src={item.imgUrl} alt={item.productName} />
                </div>
                <div className={cx('bot')}>
                    <p>
                        <span>$</span>
                        {item.price}
                    </p>
                    <button onClick={() => context.addAndIncreaseCartItem(item)}>
                        <ShoppingCart className={cx('cart')} />
                        <span>buy now</span>
                    </button>
                </div>
            </div>

            <div className={cx('modal')}>
                <div className={cx('container')}>
                    <ShoppingCart className={cx('icon')} onClick={() => context.addAndIncreaseCartItem(item)} />
                    <Favorite className={cx('icon')} />
                    <Search className={cx('icon')} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
