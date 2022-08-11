import { Routes, Route } from 'react-router-dom';

import publicRoutes from './routes/routes';
import { Nav, Footer } from './components';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                {publicRoutes.map((route, i) => {
                    const Page = route.component;
                    return <Route key={i} path={route.path} element={<Page />} />;
                })}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
