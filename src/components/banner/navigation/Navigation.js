import React from 'react';
import classNames from 'classnames/bind';
import { Home, Sell, AddBox, Woman, SettingsAccessibility, Checkroom, Headphones } from '@mui/icons-material';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

const Navigation = () => {
    return (
        <div className={cx('navigation')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div>
                        <Home />
                        <span>Home</span>
                    </div>
                    <div>
                        <Sell />
                        <span>Best Selling</span>
                    </div>
                    <div>
                        <AddBox />
                        <span>New Arrivals</span>
                    </div>
                    <div>
                        <Woman />
                        <span>Fashion &amp; Bewauty</span>
                    </div>
                    <div>
                        <SettingsAccessibility />
                        <span>Kid &amp; Baby clothes</span>
                    </div>
                    <div>
                        <Checkroom />
                        <span>Men &amp; Wonan clothes</span>
                    </div>
                    <div>
                        <Headphones />
                        <span>Electric &amp; Accessories</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
