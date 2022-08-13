import React from 'react';

import { Products, Filter } from '../../components';

const Search = () => {
    return (
        <div style={{ backgroundColor: '#f3f6ff', padding: '20px 0' }}>
            <div style={{ width: '95%', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <Filter />
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default Search;
