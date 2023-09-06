import ThemeButton from "./ThemeButton"

const DashBoard = ({children})=>{
    return(
<div className="flex min-h-screen flex-row bg-gray-200 text-gray-800
dark:bg-slate-900 dark:text-white">
  <aside className="sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md
  dark:bg-slate-950 dark:text-white
   border-r-2 border-slate-800 dark:border-white ">
    <span className=" font-mono text-2xl font-bold ml-6
    mt-8">
        GENERATE
    </span>
    <div className=" w-full border-b-4 border text-center dark:border-slate-800  ">
        
      <span className="font-mono text-xl font-bold tracking-widest"> 
      <span className="text-purple-600">IA</span> IMAGES </span>
    </div>
    <ul className="">
      <li className=" mt-6 ">
      <ThemeButton/>
      </li>
    </ul>
    <div className="my-4"></div>
    
  </aside>

  <main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0  items-center">
    <div className="flex h-full  bg-slate-white text-center text-2xl font-bold shadow-md">{children}</div>
  </main>
</div>
    )
}

export default DashBoard