/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Search } from '@mui/icons-material';

import styles from './Search.module.scss';
import { Context } from '../../context/Context';

const cx = classNames.bind(styles);

const Seacrh = () => {
    const context = useContext(Context);

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (search !== '') {
            const searchItems = context.items.filter((item) => item.productName.toLowerCase().includes(search));
            setSearchResults(searchItems);
        } else {
            setSearchResults([]);
        }
    }, [search]);

    return (
        <div className={cx('search')}>
            <div className={cx('container')}>
                <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button>
                    <Search className={cx('icon')} />
                </button>
            </div>
            <div className={cx('results')}>
                {searchResults.map((searchResult, i) => (
                    <div key={i} className={cx('result')}>
                        {searchResult.productName}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seacrh;
