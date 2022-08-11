/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';

import { Context } from '../context/Context';
import { Banner, Products, Feedback } from '../components';

const Home = () => {
    const context = useContext(Context);

    useEffect(() => {
        const getItems = async () => {
            const res = await fetch('https://raw.githubusercontent.com/DooDucc/fakeApi/master/db.json');
            const data = await res.json();
            context.setItems(data.products);
        };
        getItems();
    }, []);

    return (
        <div style={{ backgroundColor: '#f3f6ff' }}>
            <div style={{ width: '95%', margin: '0 auto' }}>
                <Banner />
                <Products prodType="featured products" />
                <Products prodType="recent products" />
                <Feedback />
            </div>
        </div>
    );
};

export default Home;
