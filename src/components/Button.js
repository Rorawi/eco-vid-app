import React,{useState} from 'react';


function Button({}) {
    const [filter,setFilter] = useState("")

    const filteredCategory = (category) => {
        setFilter(category)

    }

  return (
    <div className="fixed left-[50%]">
     <div
        className="flex justify-evenly items-center font-montserrat"
      >
        <button className="px-4 py-2 bg-green-500 rounded-xl" onClick={() => filteredCategory("")}>All</button>
        <button className="px-4 py-2 bg-green-500 rounded-xl" onClick={() => filteredCategory("Easy")}>Easy</button>
        <button className="px-4 py-2 bg-green-500 rounded-xl" onClick={() => filteredCategory("Intermediate")}>
          Intermediate
        </button>
        <button className="px-4 py-2 bg-green-500 rounded-xl" onClick={() => filteredCategory("Advanced")}>Advanced</button>
      </div>
     </div>
  )
}

export default Button