import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MongoDb from './pages/mongodb/MongoDb';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Static / Main */}
            <Route path="/" element={<Home />} />
            <Route path="/mongodb" element={<MongoDb />} />
        </Routes>
    );
}

export default AppRoutes;