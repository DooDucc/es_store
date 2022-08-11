import { useState } from 'react';
import classNames from 'classnames/bind';
import { ChevronRight, ChevronLeft, ShoppingCart, Favorite, Search } from '@mui/icons-material';

import * as constants from '../../../constants/const';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

const Slider = () => {
    const [translateNum, setTranslateNum] = useState(0);
    const [slideNum, setSlideNum] = useState(0);

    const slideMove = (direction) => {
        if (direction === 'left' && slideNum > 0) {
            setSlideNum(slideNum - 1);
            setTranslateNum((prev) => prev + 900);
        }
        if (direction === 'right' && slideNum < 3) {
            setSlideNum(slideNum + 1);
            setTranslateNum((prev) => prev - 900);
        }
    };

    return (
        <div className={cx('slider')}>
            <div style={{ transform: `translateX(${translateNum}px)` }} className={cx('slides')}>
                <div className={cx('slide')}>
                    <img src={constants.SLIDE_1} alt="img" />
                    <div className={cx('modal')}>
                        <div className={cx('container')}>
                            <ShoppingCart className={cx('icon')} />
                            <Favorite className={cx('icon')} />
                            <Search className={cx('icon')} />
                        </div>
                    </div>
                </div>
                <div className={cx('slide')}>
                    <img src={constants.SLIDE_2} alt="img" />
                    <div className={cx('modal')}>
                        <div className={cx('container')}>
                            <ShoppingCart className={cx('icon')} />
                            <Favorite className={cx('icon')} />
                            <Search className={cx('icon')} />
                        </div>
                    </div>
                </div>
                <div className={cx('slide')}>
                    <img src={constants.SLIDE_3} alt="img" />
                    <div className={cx('modal')}>
                        <div className={cx('container')}>
                            <ShoppingCart className={cx('icon')} />
                            <Favorite className={cx('icon')} />
                            <Search className={cx('icon')} />
                        </div>
                    </div>
                </div>
                <div className={cx('slide')}>
                    <img src={constants.SLIDE_4} alt="img" />
                    <div className={cx('modal')}>
                        <div className={cx('container')}>
                            <ShoppingCart className={cx('icon')} />
                            <Favorite className={cx('icon')} />
                            <Search className={cx('icon')} />
                        </div>
                    </div>
                </div>
            </div>
            <button className={cx('btn-prev')} onClick={() => slideMove('left')}>
                <ChevronLeft />
            </button>
            <button className={cx('btn-next')} onClick={() => slideMove('right')}>
                <ChevronRight />
            </button>
        </div>
    );
};

export default Slider;
