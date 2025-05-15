
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "../views/home/Home"
import Register from "../views/register/Register"
import Login from "../views/login/Login"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}
    
export default AppRouter
