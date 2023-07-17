import axios from 'axios';

const signIn = (emailId, password) => {
    return axios.post(
        process.env.REACT_APP_API_URL + '/user/auth',
        {
            emailId,
            password
        }
    );
}

export {
    signIn
}