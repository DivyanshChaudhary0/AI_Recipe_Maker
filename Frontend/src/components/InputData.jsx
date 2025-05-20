
const InputData = ({input,setInput,handleData}) => {
  return (
    <div className="input-form mt-2">
        <input  
          className="w-96 px-4 py-2 border border-black rounded mx-4"
          value={input}  
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          placeholder="Add food" 
        />
        <button onClick={handleData} className="px-8 py-2 mt-2 text-white rounded bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer">Add</button>
    </div>
  )
}

export default InputData