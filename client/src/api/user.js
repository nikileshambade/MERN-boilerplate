import axios from "axios";

const USER = {
    getAllUser:() => {
        return axios.get(process.env.REACT_APP_API_URL + '/user',)
    },
    getAllRoles:() => {
        return axios.get(process.env.REACT_APP_API_URL + '/roles',)
    },
    addRole:({ role, permissions }) => {
        return axios.post(process.env.REACT_APP_API_URL + '/roles/add',
        {
            role,
            permissions
        })
    }
}

export default USER;