import axios from "axios";

const USER = {
    getAllUser:() => {
        return axios.get(process.env.REACT_APP_API_URL + '/user',)
    }
}

export default USER;