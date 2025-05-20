
import { useState } from "react";
import {useSelector} from "react-redux"
import ShowData from "../../components/ShowData";

const Home = () => {

  const user = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleData = () => {
    let newData = [...data,input];
    setData(newData);
    setInput("");
  }

  return (
    <div className="w-full text-center mt-20">
      <p className="py-4">Welcome <span className="text-3xl "> {"____" + user?.username.toUpperCase()}</span> </p>
      <div className="input-form mt-2">
        <input 
          className="w-96 px-4 py-2 border border-black rounded mx-4"
          value={input}  
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          placeholder="Add food" 
        />
        <button onClick={handleData} className="px-8 py-2 text-white rounded bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer">Add</button>
      </div>
      <ShowData data={data} />
    </div>
  )
}

export default Home