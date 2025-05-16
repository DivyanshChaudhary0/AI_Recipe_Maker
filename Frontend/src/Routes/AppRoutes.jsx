
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "../views/home/Home"
import Register from "../views/register/Register"
import Login from "../views/login/Login"
import Protected from "../components/Protected"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Protected children={<Home/>} />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}
    
export default AppRouter
