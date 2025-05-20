
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import {useDispatch} from "react-redux"
import { addRecipe } from "../store/recipeSlice";

const ShowData = ({data,deleteHandler}) => {
    const dispatch = useDispatch();

    const submitData = () => {
        axios.post(BASE_URL + "/api/v1/recipe/generate",{data},{withCredentials:true})
        .then((res) => {
            console.log(res.data);
            dispatch(addRecipe(res.data.recipe))
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
    <div className="w-full lg:w-[32%] lg:mx-auto rounded px-4">
        {data.map((value,index) => (
            <div key={index} className="flex items-center gap-2 px-6 py-2 justify-between bg-gray-100 mt-2" >
                <p>{value}</p>
                <button onClick={() => deleteHandler(index)} className="px-4 py-1 cursor-pointer font-semibold rounded text-sm bg-red-500 hover:bg-red-600 transition-all text-white">Delete</button>
            </div>
        ))}

        {data.length > 0 && <button onClick={submitData} className="mt-6 bg-gray-200 w-full rounded py-1 cursor-pointer font-semibold">Submit</button>}
    </div>
  )
}

export default ShowData