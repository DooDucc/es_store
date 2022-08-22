/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Products.module.scss';
import ProductCard from '../productCard/ProductCard';

import { Context } from '../../context/Context';

const cx = classNames.bind(styles);

const Products = ({ prodType }) => {
    const context = useContext(Context);
    const [renderItems, setRenderItems] = useState([]);

    useEffect(() => {
        let items = null;
        if (context.filter.category.length === 0) {
            switch (context.filter.price) {
                case 'all':
                    setRenderItems(context.items);
                    break;
                case 'radio1':
                    items = context.items.filter((item) => item.price > 0 && item.price < 20);
                    setRenderItems(items);
                    break;
                case 'radio2':
                    items = context.items.filter((item) => item.price > 20 && item.price < 50);
                    setRenderItems(items);
                    break;
                case 'radio3':
                    items = context.items.filter((item) => item.price > 50 && item.price < 100);
                    setRenderItems(items);
                    break;
                default:
            }
        } else {
            switch (context.filter.price) {
                case 'all':
                    items = context.items.filter((item) => context.filter.category.includes(item.category));
                    setRenderItems(items);
                    break;
                case 'radio1':
                    items = renderItems.filter((item) => {
                        if (context.filter.category.includes(item.category) && item.price > 0 && item.price < 20)
                            return item;
                    });
                    setRenderItems(items);
                    break;
                case 'radio2':
                    items = renderItems.filter((item) => {
                        if (context.filter.category.includes(item.category) && item.price > 20 && item.price < 50)
                            return item;
                    });
                    setRenderItems(items);
                    break;
                case 'radio3':
                    items = renderItems.filter((item) => {
                        if (context.filter.category.includes(item.category) && item.price > 50 && item.price < 100)
                            return item;
                    });
                    setRenderItems(items);
                    break;
                default:
            }
        }
    }, [context.filter]);

    return (
        <div className={cx('products')} style={prodType ? {} : { marginTop: '55px' }}>
            {prodType && (
                <div className={cx('title')}>
                    <h1>{prodType}</h1>
                </div>
            )}
            <div className={cx('list')}>
                {prodType
                    ? context.items.slice(0, 4).map((item, i) => <ProductCard key={i} item={item} />)
                    : renderItems.map((item, i) => <ProductCard key={i} item={item} />)}
            </div>
        </div>
    );
};

export default Products;
