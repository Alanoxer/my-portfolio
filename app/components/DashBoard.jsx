import ThemeButton from "./ThemeButton" 
import Link from "next/link"

const DashBoard = ({children})=>{
    return(
<div className="flex min-h-screen flex-row bg-gray-200 text-gray-800
dark:bg-slate-900 dark:text-white">
  <aside className=" staticflex min-h-screen flex-row sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md
  dark:bg-slate-950 dark:text-white
   border-r-2 border-slate-800 dark:border-white ">
    
    <div className=" w-full border-b-4 border text-center dark:border-slate-800  ">
        
      <Link href={"#projects"} className="font-mono text-xl font-bold tracking-widest"> 
      <Link href={"#projects"} className="text-purple-600">My</Link> Projects </Link>
    </div>

    <div className=" mt-8 w-full border-b-4 border text-center dark:border-slate-800  ">
        
      <Link href={"#me"} className="font-mono text-xl font-bold tracking-widest"> 
      <Link href={"#me"} className="text-purple-600">About</Link> Me </Link>
    </div>

    <ul className="">
      <li className=" mt-6 ">
      <ThemeButton/>
      </li>
    </ul>
    <div className="my-4"></div>
    
  </aside>

  <main className="static main -ml-4 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0  items-center">
    <div className="flex h-full  bg-slate-white text-center text-2xl font-bold shadow-md">{children}</div>
  </main>
</div>
    )
}

export default DashBoard