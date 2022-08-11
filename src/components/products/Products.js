/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Products.module.scss';
import ProductCard from '../productCard/ProductCard';

import { Context } from '../../context/Context';

const cx = classNames.bind(styles);

const Products = ({ prodType }) => {
    const context = useContext(Context);
    const [renderItems, setRenderItems] = useState(context.items);

    useEffect(() => {
        let items = null;

        // radio filter
        if (context.radioChecked === 'all' || context.checkboxChecked.length === 0) {
            setRenderItems(context.items);
        }
        if (context.radioChecked === 'radio1') {
            items = context.items.filter((item) => item.price > 0 && item.price < 20);
            setRenderItems(items);
        }
        if (context.radioChecked === 'radio2') {
            items = context.items.filter((item) => item.price > 20 && item.price < 50);
            setRenderItems(items);
        }
        if (context.radioChecked === 'radio3') {
            items = context.items.filter((item) => item.price > 50 && item.price < 100);
            setRenderItems(items);
        }

        // checkbox filter
        if (context.checkboxChecked.length > 0) {
            if (context.radioChecked) {
                items = renderItems.filter((item) => context.checkboxChecked.includes(item.category));
                setRenderItems(items);
            } else {
                items = context.items.filter((item) => context.checkboxChecked.includes(item.category));
                setRenderItems(items);
            }
        }
    }, [context.radioChecked, context.checkboxChecked]);

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
