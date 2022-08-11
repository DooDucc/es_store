import { useContext } from 'react';
import classNames from 'classnames/bind';

import { Context } from '../../context/Context';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

const Filter = () => {
    const context = useContext(Context);

    const handleCheckbox = (idCheck) => {
        context.setCheckboxChecked((prev) => {
            const isChecked = context.checkboxChecked.includes(idCheck);
            if (isChecked) {
                return context.checkboxChecked.filter((item) => item !== idCheck);
            } else {
                return [...prev, idCheck];
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
                                checked={context.radioChecked === 'all'}
                                id="all"
                                type="radio"
                                onChange={() => context.setRadioChecked('all')}
                            />
                            <label htmlFor="all">All</label>
                        </div>
                        <div>
                            <input
                                checked={context.radioChecked === 'radio1'}
                                id="radio1"
                                type="radio"
                                onChange={() => context.setRadioChecked('radio1')}
                            />
                            <label htmlFor="radio1">0 - $20</label>
                        </div>
                        <div>
                            <input
                                checked={context.radioChecked === 'radio2'}
                                id="radio2"
                                type="radio"
                                onChange={() => context.setRadioChecked('radio2')}
                            />
                            <label htmlFor="radio2">$20 - $50</label>
                        </div>
                        <div>
                            <input
                                checked={context.radioChecked === 'radio3'}
                                id="radio3"
                                type="radio"
                                onChange={() => context.setRadioChecked('radio3')}
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
                                checked={context.checkboxChecked.includes('Skirt')}
                                id="Skirt"
                                type="checkbox"
                                onChange={() => handleCheckbox('Skirt')}
                            />
                            <label htmlFor="Skirt">Skirt</label>
                        </div>
                        <div>
                            <input
                                checked={context.checkboxChecked.includes('Shirt')}
                                id="Shirt"
                                type="checkbox"
                                onChange={() => handleCheckbox('Shirt')}
                            />
                            <label htmlFor="Shirt">Shirt</label>
                        </div>
                        <div>
                            <input
                                checked={context.checkboxChecked.includes('Top')}
                                id="Top"
                                type="checkbox"
                                onChange={() => handleCheckbox('Top')}
                            />
                            <label htmlFor="Top">Top</label>
                        </div>
                        <div>
                            <input
                                checked={context.checkboxChecked.includes('Jeans')}
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
