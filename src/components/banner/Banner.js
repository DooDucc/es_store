import React from 'react';
import classNames from 'classnames/bind';

import styles from './Banner.module.scss';
import Navigation from './navigation/Navigation';
import Slider from './slider/Slider';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx('banner')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('left')}>
                        <Navigation />
                    </div>
                    <div className={cx('right')}>
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
