
import { useState } from "react";
import {useSelector} from "react-redux"
import ShowData from "../../components/ShowData";
import InputData from "../../components/InputData";
import ShowRecipe from "../../components/ShowRecipe";

const Home = () => {

  const user = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleData = () => {
    if(input.length <= 0) return;
    let newData = [...data,input];
    setData(newData);
    setInput("");
  }

   const deleteHandler = (idx) => {
    setData((prev) => prev.filter((val,index) => idx !== index))
  }

  return (
    <div className="w-full text-center mt-20">
      <p className="py-4">Welcome <span className="text-3xl "> {"____" + user?.username.toUpperCase()}</span> </p>
      <InputData input={input} setInput={setInput} handleData={handleData} />
      <ShowData data={data} deleteHandler={deleteHandler} />
      <ShowRecipe />
    </div>
  )
}

export default Home