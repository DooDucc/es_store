import { useContext } from 'react';
import classNames from 'classnames/bind';

import { Context } from '../../context/Context';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

const Filter = () => {
    const context = useContext(Context);

    const handleCheckbox = (idCheck) => {
        context.setFilter(() => {
            const isChecked = context.filter.category.includes(idCheck);
            if (isChecked) {
                return { ...context.filter, category: context.filter.category.filter((item) => item !== idCheck) };
            } else {
                return { ...context.filter, category: [...context.filter.category, idCheck] };
            }
        });
    };

    return (
        <div className={cx('filter')}>
            <h1>Filter</h1>
            <div className={cx('container')}>
                <div className={cx('filter-box')}>
                    <h2>Price</h2>
                    <form>
                        <div>
                            <input
                                checked={context.filter.price === 'all'}
                                id="all"
                                type="radio"
                                onChange={() => context.setFilter({ ...context.filter, price: 'all' })}
                            />
                            <label htmlFor="all">All</label>
                        </div>
                        <div>
                            <input
                                checked={context.filter.price === 'radio1'}
                                id="radio1"
                                type="radio"
                                onChange={() => context.setFilter({ ...context.filter, price: 'radio1' })}
                            />
                            <label htmlFor="radio1">0 - $20</label>
                        </div>
                        <div>
                            <input
                                checked={context.filter.price === 'radio2'}
                                id="radio2"
                                type="radio"
                                onChange={() => context.setFilter({ ...context.filter, price: 'radio2' })}
                            />
                            <label htmlFor="radio2">$20 - $50</label>
                        </div>
                        <div>
                            <input
                                checked={context.filter.price === 'radio3'}
                                id="radio3"
                                type="radio"
                                onChange={() => context.setFilter({ ...context.filter, price: 'radio3' })}
                            />
                            <label htmlFor="radio3">$50 - $100</label>
                        </div>
                    </form>
                </div>

                <div className={cx('filter-box')}>
                    <h2>Category</h2>
                    <form>
                        <div>
                            <input
                                checked={context.filter.category.includes('Skirt')}
                                id="Skirt"
                                type="checkbox"
                                onChange={() => handleCheckbox('Skirt')}
                            />
                            <label htmlFor="Skirt">Skirt</label>
                        </div>
                        <div>
                            <input
                                checked={context.filter.category.includes('Shirt')}
                                id="Shirt"
                                type="checkbox"
                                onChange={() => handleCheckbox('Shirt')}
                            />
                            <label htmlFor="Shirt">Shirt</label>
                        </div>
                        <div>
                            <input
                                checked={context.filter.category.includes('Top')}
                                id="Top"
                                type="checkbox"
                                onChange={() => handleCheckbox('Top')}
                            />
                            <label htmlFor="Top">Top</label>
                        </div>
                        <div>
                            <input
                                checked={context.filter.category.includes('Jeans')}
                                id="Jeans"
                                type="checkbox"
                                onChange={() => handleCheckbox('Jeans')}
                            />
                            <label htmlFor="Jeans">Jeans</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Filter;
