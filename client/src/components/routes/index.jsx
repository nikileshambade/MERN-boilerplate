import { Routes, Route } from 'react-router-dom'
import SignInPage from '../pages/sign_in';
import SignUpPage from '../pages/sign_up';
import SessionManager from './session';
import BasicLayout from '../layout/basic_layout';
import HomePage from '../pages/home';
import DashBoard from '../pages/dashboard';
import Settings from '../pages/settings';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/signin' element={<SignInPage />}></Route>
            <Route path='/signup' element={<SignUpPage />}></Route>
            <Route path='/' element={<SessionManager />} >
                <Route path='/' element={<BasicLayout />} >
                    <Route path='/' element={<HomePage />} ></Route>
                    <Route path='/dashboard' element={<DashBoard />} ></Route>
                    <Route path='/settings' element={<Settings />} ></Route>
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes;