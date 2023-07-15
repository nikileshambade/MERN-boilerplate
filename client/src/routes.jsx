import { Routes, Route } from 'react-router-dom'
import LoginPage from './components/pages/login';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/login' element={<LoginPage />}></Route>
        </Routes>
    )
}

export default AppRoutes;