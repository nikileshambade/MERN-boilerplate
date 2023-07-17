import { Routes, Route } from 'react-router-dom'
import SignInPage from './components/pages/sign_in';
import SignUpPage from './components/pages/sign_up';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/signin' element={<SignInPage />}></Route>
            <Route path='/signup' element={<SignUpPage />}></Route>
        </Routes>
    )
}

export default AppRoutes;