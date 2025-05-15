
import { useState } from 'react'
import axios from "axios"
import { BASE_URL } from '../../utils/constants';

const Register = () => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        axios.post( BASE_URL + "/api/v1/user/register",{username,email,password},{ withCredentials: true })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
    <div className='w-full h-screen flex flex-col gap-4 items-center justify-center'>
        <h2 className='text-2xl font-semibold'>Register User</h2>
        <form className='flex flex-col gap-4 w-[400px]' onSubmit={handleSubmit} >
            <input 
                type="text" 
                placeholder='Enter username' 
                className='border border-gray-500 rounded-xl outline-blue-500 px-4 py-2' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="text"  
                placeholder='Enter email' 
                className='border border-gray-500 rounded-xl outline-blue-500 px-4 py-2' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="text" 
                placeholder='Enter password' 
                className='border border-gray-500 rounded-xl outline-blue-500  px-4 py-2' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button className='px-2 py-2 bg-blue-500 hover:bg-blue-600 transition-all text-white rounded-xl cursor-pointer'>Register</button>
        </form>
    </div>
  )
}

export default Register
