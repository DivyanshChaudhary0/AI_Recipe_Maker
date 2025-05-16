
import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import {useDispatch} from "react-redux"
import { addUser } from '../store/userSlice'

const Protected = ({children}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(BASE_URL + "/api/v1/user/me", { withCredentials: true })
        .then((res) => {
            dispatch(addUser(res.data.user));
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

  return children
}

export default Protected