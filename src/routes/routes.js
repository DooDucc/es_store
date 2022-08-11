import config from '../config';

// Pages
import { Home, Cart, Search } from '../pages';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.search, component: Search },
];

export default publicRoutes;
