import { useContext } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { Favorite, ShoppingCart } from '@mui/icons-material';

import Search from '../search/Search';
import { Context } from '../../context/Context';

import './Nav.scss';
// https://raw.githubusercontent.com/DooDucc/fakeApi/master/db.json

const Nav = () => {
    const context = useContext(Context);

    return (
        <div className="nav">
            <div className="top">
                <div className="container">
                    <ul className="list">
                        <CustomLink to="/">home</CustomLink>
                        <CustomLink to="/search">search</CustomLink>
                        <Link to="" className="link">
                            products
                        </Link>
                        <CustomLink to="/cart">cart</CustomLink>
                        <Link to="" className="link">
                            checkout
                        </Link>
                        <Link to="" className="link">
                            my account
                        </Link>
                        <Link to="" className="link">
                            more pages
                        </Link>
                    </ul>
                    <div className="userAccount">
                        <span>user account</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <Link to="/" className="logo">
                        <span>E</span>Store
                    </Link>
                    <Search />
                    <div className="actions">
                        <div className="action">
                            <Favorite />
                            <span>(0)</span>
                        </div>
                        <Link to="/cart" className="action">
                            <ShoppingCart />
                            <span>{context.cartList.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <Link className={isActive ? 'link active' : 'link'} to={to} {...props}>
            {children}
        </Link>
    );
};

export default Nav;
