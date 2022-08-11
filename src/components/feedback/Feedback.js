import React from 'react';
import classNames from 'classnames/bind';
import { Star } from '@mui/icons-material';

import styles from './Feedback.module.scss';

const cx = classNames.bind(styles);

const Feedback = () => {
    return (
        <div className={cx('feedback')}>
            <div className={cx('container')}>
                <div className={cx('post')}>
                    <div className={cx('ava')}>
                        <img
                            src="https://i.picsum.photos/id/805/200/300.jpg?hmac=fF1qvNutYd9afa-FIuDfrsh7edNFRq6IXWnMbSuzSOs"
                            alt="ava"
                        />
                    </div>
                    <div className={cx('text')}>
                        <h3>Christopher</h3>
                        <p>Professor</p>
                        <div className={cx('icons')}>
                            <Star className={cx('icon')} />
                            <Star className={cx('icon')} />
                            <Star className={cx('icon')} />
                            <Star className={cx('icon')} />
                            <Star className={cx('icon')} />
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy
                        </p>
                    </div>
                </div>
                <div className={cx('post')}>
                    <div className={cx('ava')}>
                        <img
                            src="https://i.picsum.photos/id/805/200/300.jpg?hmac=fF1qvNutYd9afa-FIuDfrsh7edNFRq6IXWnMbSuzSOs"
                            alt="ava"
                        />
                    </div>
                    <div className={cx('text')}>
                        <h3>Elena Sharon</h3>
                        <p>Doctor</p>
                        <div className={cx('icons')}>
                            <Star className={cx('icon')} />
                            <Star className={cx('icon')} />
                            <Star className={cx('icon')} />
                            <Star className={cx('icon')} />
                            <Star className={cx('icon')} />
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
