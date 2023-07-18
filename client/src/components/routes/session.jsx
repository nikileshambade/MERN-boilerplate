import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
	const token = localStorage.getItem("token");
	return token ? { token } : { token: false }
}

const SessionManager = () => {
    const { token } = useAuth();
    return token ? (<Outlet />) : (<Navigate to="/signin" />);
}

export default SessionManager;