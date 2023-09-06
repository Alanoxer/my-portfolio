'use client'
import { useState } from "react"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState([])
  return (<div className=" mt-20">
  
  <form className=" flex flex-row px-40 sm:px-16"
    onSubmit={async (e)=>{
    e.preventDefault(); 

    const res = await fetch("/api/generate",{
      method: "POST",
      body: JSON.stringify({prompt}),
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await res.json()
    console.log(data)
    setImage(data.url)
  }}>
    
    <input 
    type="text"
    placeholder="Write your prompt here..."
    onChange={(e)=> setPrompt(e.target.value)
    }
    className=" bg-zinc-700 text-white px-3 py-2 my-2
     m-auto rounded-lg"
    value={prompt}
    />
    <button className=" text-xl ml-16 rounded-lg px-2 bg-gray-100 border border-gray-300 border-b-4 hover:bg-gray-300 hover:border-gray-400
    dark:bg-slate-700 dark:hover:bg-slate-800
    dark:border-slate-800
    dark:hover:border-slate-950"
    >Generate Image
    </button>
    

  </form>

  {
    image &&  (
      <img className=" m-auto rounded-md " 
      src={image}
      alt="..."
      />
    )
  }
  
  </div>  
  )
}
 