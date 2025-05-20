
const ShowData = ({data,deleteHandler}) => {

  return (
    <div className="w-[32%] mx-auto rounded">
        {data.map((value,index) => (
            <div key={index} className="flex items-center gap-2 px-6 py-2 justify-between bg-gray-100 mt-2" >
                <p>{value}</p>
                <button onClick={() => deleteHandler(index)} className="px-4 py-1 cursor-pointer font-semibold rounded text-sm bg-red-500 hover:bg-red-600 transition-all text-white">Delete</button>
            </div>
        ))}

        {data.length > 0 && <button  className="mt-6 bg-gray-200 w-full rounded py-1 cursor-pointer font-semibold">Submit</button>}
    </div>
  )
}

export default ShowData