/* eslint-disable react/no-unescaped-entities */
'use client'
import React, {useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  
  const imgs=[
    {id:0,value:"/Opera Instantánea_2024-03-02_113323_newspage-v2.vercel.app.png"},
    {id:1,value:"/Opera Instantánea_2024-03-02_093436_shopest-lyart.vercel.app.png"},
    {id:2,value:"/Screenshot_20240630-201245.png"}
  ]

  const [wordData, setWordData]= useState(imgs[0])
  const [val, setVal] = useState(0)

  const handleClick=(index)=>{
    console.log(index)
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }

  const handleNext = ()=>{
    let index = val < imgs.length -1 ? val +1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }

  const handlePrevious = ()=>{
    let index = val <= imgs.length -1 && val > 0? val - 1 : val;
    setVal(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }

  return (<>
  <div className="
    m-auto
    lg:mx-40
    sm:m-0
    w-auto
    h-auto 
    rounded-lg    ">

{/* relative top-80 right-12 */}
      
    <div id="projects" className=" flex justify-center content-center w-auto text-center mt-4">
        <button type="button" onClick={handlePrevious}
        class="flex relative top-80 left-16 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-purple-700  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden">Previous</span>
            </span>
        </button>

      <Image width={1300} height={800} src={wordData.value} alt={wordData.id} className=' w-auto h-1/4 rounded-lg border-2 border-slate-600' />


        <button type="button" onClick={handleNext}
        class="flex relative top-80 right-16 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-purple-700  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="hidden">Next</span>
            </span>
        </button>
      
    </div>
    
    {val === 0 ?
  <div className=" absolute w-1/2 mt-8 ml-80 right-56">
      <Link href={"https://newspage-v2.vercel.app/"} 
      className=" p-3 ml-8 rounded-lg border-l-4 border-b-4 border-purple-900 bg-purple-700 text-white dark:text-white font-mono ">
      Visitar
      </Link>

      <p className=" mt-8 ml-8">
        A news page made with React Js and NextJS API, API CALL,
        Register and Login, Authentication with AuthO, Mongo DB Database
      </p>
  </div> 
  : null || val === 1 ?
  <div className=" absolute w-1/2 mt-8 ml-80 right-56 ">
      <Link href={"https://shopest-lyart.vercel.app/products/page/0"} 
      className=" p-3 ml-8 rounded-lg border-l-4 border-b-4 border-purple-900 bg-purple-700 text-white dark:text-white font-mono ">
      Visitar
      </Link>

      <p className=" mt-8 ml-8">
        A shopest web made with React Js and NextJS API, Styling with Tailwind CSS.
        Backend with Node JS and CRUD in MySQL.
      </p>
  </div> 
  : null || val === 2 ?
  <div className=" absolute w-1/2 mt-8 ml-80 right-56 ">
      <Link href={"https://github.com/Alanoxer/FinanceApp-ReactNative/tree/main"} 
      className=" p-3 ml-8 rounded-lg border-l-4 border-b-4 border-purple-900 bg-purple-700 text-white dark:text-white font-mono ">
      The app is still being tested by Play Store
      </Link>

      <p className=" mt-8 ml-8">
        A Finance App made with React Native and Expo.
      </p>
  </div> 
  : null
 }


<div className=" grid-flow-col text-left content-start ml-4 mt-8
">

    <div>
        <h1 className=" text-3xl font-mono mb-4">
            Technologies for this project :
        </h1>
    </div>

    {val === 2 ?
    <div>
      <p>
        React Native
      </p>
    </div> : null }


    <div>
        <h1 className=" text-3xl font-mono my-4">
            Frontend
        </h1>


        <ul className=" flex ">

        <li>
        <svg
    className=" w-16 h-16 "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <title>HTML</title>
    <polygon
      points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201"
      style={{ fill: "#e44f26" }}
    />
    <polygon
      points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858"
      style={{ fill: "#f1662a" }}
    />
    <polygon
      points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407"
      style={{ fill: "#ebebeb" }}
    />
    <polygon
      points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434"
      style={{ fill: "#ebebeb" }}
    />
    <polygon
      points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407"
      style={{ fill: "#fff" }}
    />
    <polygon
      points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151"
      style={{ fill: "#fff" }}
    />
  </svg>
    </li>

    <li>
  <svg
    className=" w-16 h-16 "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <title>CSS</title>
    <polygon
      points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201"
      style={{ fill: "#1572b6" }}
    />
    <polygon
      points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858"
      style={{ fill: "#33a9dc" }}
    />
    <polygon
      points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191"
      style={{ fill: "#fff" }}
    />
    <polygon
      points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218"
      style={{ fill: "#ebebeb" }}
    />
    <polygon
      points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151"
      style={{ fill: "#fff" }}
    />
    <polygon
      points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935"
      style={{ fill: "#ebebeb" }}
    />
    <polygon
      points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191"
      style={{ fill: "#ebebeb" }}
    />
  </svg>
</li>

<li>
  <svg
    className=" w-14 h-14 mt-1 ml-2"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="JavaScript"
    role="img"
    viewBox="0 0 512 512"
  >
    <title>JavaScript</title>
    <rect width="512" height="512" rx="15%" fill="#f7df1e" />
    <path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z" />
  </svg>
</li>

<li>
  <svg
    className=" w-16 h-16 ml-2"
    viewBox="175.7 78 490.6 436.9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>React</title>
    <g fill="#61dafb">
      <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
      <circle cx="420.9" cy="296.5" r="45.7" />
    </g>
  </svg>
</li>

<li>
  <svg
    className=" w-14 h-14 bg-white rounded-full ml-3 mt-1"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
  >
    <title>Next JS</title>
    <g>
      <path
        d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
        fill="#000000"
      ></path>
    </g>
  </svg>
</li>

<li>
  <svg
    className=" w-16 h-16 ml-2 -mt-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <title>Tailwind</title>
    <path
      d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
      style={{ fill: "#44a8b3" }}
    />
  </svg>
</li>

        </ul>
    </div>


    <div>
        <h1 className=" text-3xl font-mono mt-4 mb-1">
            Backend
        </h1>

        <ul className="flex">

            <li>
                <svg className="w-20 h-20 -mt-2" width="800px" height="800px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path style={{fill:"url(#a)"}} d="M0 0h64v64H0z"/><defs><pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#b" transform="scale(.002)"/></pattern><image id="b" width="500" height="500" xlinkHref="data:image/png;base64,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"/></defs></svg>
            </li>
            
              <li>
            <svg className=" w-16 h-16 ml-2" style={{fill:"#000000"}} width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
            </li>
            
            
        </ul>
    </div>


    <div>
        <h1 className=" text-3xl font-mono my-2">
            Database
        </h1>

        <ul className="flex ">
            {val === 0 ?
            <li>
            <svg className=" w-16 h-16" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <circle cx="512" cy="512" r="512" style={{fill:"#13aa52"}}/>
            <path d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z" style={{fill:"#fff"}}/>
            </svg>
            </li>
            :
            <li>
              <svg className=" w-16 h-16 ml-2" xmlns="http://www.w3.org/2000/svg" width="256" height="133" viewBox="0 0 204.8 105.765"><path d="M0 96.334h6.747V69.7l10.445 23.227c1.232 2.8 2.92 3.806 6.228 3.806s4.93-.995 6.164-3.806L40.03 69.7v26.644h6.748v-26.6c0-2.595-1.04-3.85-3.18-4.498-5.125-1.6-8.564-.216-10.12 3.244l-10.25 22.923L13.3 68.48c-1.492-3.46-4.995-4.844-10.12-3.244C1.038 65.885 0 67.14 0 69.734v26.6zm52.386-21.686h6.745v14.68c-.063.798.256 2.67 3.952 2.727 1.886.03 14.554 0 14.672 0v-17.48h6.76c.03 0-.007 23.834-.006 23.936.037 5.878-7.294 7.155-10.672 7.254H52.533v-4.54l21.342-.001c4.342-.46 3.83-2.617 3.83-3.344v-1.77h-14.34c-6.672-.06-10.92-2.973-10.973-6.323-.005-.3.144-14.995-.004-15.14z" style={{fill:"#00618a"}}/><path d="M89.716 96.334h19.398c2.27 0 4.477-.475 6.23-1.298 2.92-1.34 4.347-3.157 4.347-5.536v-4.93c0-1.947-1.622-3.763-4.8-4.974-1.687-.65-3.763-.995-5.774-.995h-8.175c-2.724 0-4.022-.822-4.346-2.638-.065-.216-.065-.4-.065-.606v-3.07c0-.173 0-.347.065-.563.324-1.384 1.038-1.774 3.438-2 .195 0 .454-.044.65-.044h19.268v-4.497h-18.944c-2.725 0-4.152.173-5.45.562C91.532 67 89.78 69 89.78 72.46v3.936c0 3.028 3.44 5.623 9.212 6.228.65.043 1.298.086 1.946.086h7.007c.26 0 .52 0 .714.044 2.14.173 3.05.562 3.698 1.34.4.4.52.78.52 1.2v3.936c0 .476-.324 1.082-.973 1.6-.584.52-1.557.865-2.855.952-.26 0-.454.043-.713.043h-18.62v4.498zm72.064-7.828c0 4.628 3.438 7.223 10.38 7.742a29.45 29.45 0 0 0 1.946.086h17.582v-4.498h-17.712c-3.957 0-5.45-.995-5.45-3.374v-23.27h-6.747v23.312zm-37.785.234V72.705c0-4.074 2.86-6.545 8.516-7.325a12.94 12.94 0 0 1 1.821-.13h12.807a13.87 13.87 0 0 1 1.886.13c5.656.78 8.516 3.25 8.516 7.325V88.74c0 3.305-1.215 5.074-4.015 6.227l6.646 6h-7.834l-5.377-4.854-5.413.343h-7.216c-1.235 0-2.535-.174-3.966-.564-4.3-1.17-6.37-3.424-6.37-7.152zm7.283-.4c0 .217.065.433.13.694.4 1.864 2.145 2.904 4.8 2.904h6.13l-5.63-5.083h7.834l4.9 4.433c.905-.482 1.5-1.22 1.7-2.167.065-.216.065-.433.065-.65V73.096c0-.173 0-.4-.065-.607-.4-1.733-2.146-2.73-4.746-2.73H136.22c-3 0-4.94 1.3-4.94 3.337v15.256z" style={{fill:"#e48e00"}}/><g style={{fill:"#00618a"}}><path d="M197.624 57.73c-4.147-.112-7.316.273-10.024 1.415-.77.325-1.997.333-2.123 1.298.423.443.49 1.105.825 1.65.647 1.047 1.74 2.45 2.713 3.184 1.064.803 2.16 1.663 3.303 2.36 2.03 1.238 4.296 1.945 6.25 3.184 1.152.73 2.296 1.65 3.42 2.476.555.408.93 1.042 1.65 1.297v-.118c-.38-.483-.477-1.147-.825-1.65l-1.533-1.533c-1.5-2-3.402-3.737-5.425-5.19-1.613-1.158-5.224-2.722-5.897-4.6l-.118-.118c1.144-.13 2.483-.543 3.54-.825 1.773-.475 3.358-.353 5.19-.825l2.477-.708v-.472c-.926-.95-1.586-2.207-2.595-3.066-2.64-2.25-5.523-4.495-8.49-6.37-1.646-1.04-3.68-1.714-5.425-2.595-.587-.296-1.618-.45-2.005-.944-.916-1.168-1.415-2.65-2.122-4-1.48-2.85-2.934-5.964-4.246-8.963-.895-2.045-1.48-4.062-2.594-5.897-5.355-8.804-11.12-14.118-20.048-19.34-1.9-1.11-4.187-1.55-6.605-2.123l-3.892-.236c-.792-.33-1.616-1.3-2.36-1.77-2.958-1.87-10.545-5.933-12.736-.6-1.383 3.373 2.067 6.664 3.302 8.374.866 1.2 1.976 2.543 2.594 3.892.407.886.478 1.775.826 2.713.857 2.3 1.603 4.823 2.712 6.958.56 1.08 1.178 2.218 1.887 3.184.435.593 1.18.854 1.297 1.77-.728 1.02-.77 2.6-1.18 3.892-1.843 5.812-1.148 13.035 1.533 17.337.823 1.32 2.76 4.152 5.425 3.066 2.33-.95 1.8-3.89 2.477-6.486.15-.59.058-1.02.354-1.415v.118l2.123 4.245c1.57 2.53 4.36 5.175 6.722 6.96 1.225.925 2.2 2.525 3.774 3.066v-.118h-.118c-.307-.48-.787-.677-1.18-1.06-.923-.905-1.95-2.03-2.713-3.066-2.15-2.918-4.048-6.11-5.778-9.435-.826-1.587-1.545-3.338-2.24-4.953-.268-.623-.265-1.564-.825-1.887-.763 1.184-1.887 2.14-2.477 3.538-.944 2.234-1.066 4.958-1.415 7.784-.207.074-.115.023-.236.118-1.642-.396-2.22-2.087-2.83-3.538-1.544-3.67-1.83-9.576-.472-13.798.35-1.092 1.94-4.534 1.297-5.543-.307-1.007-1.32-1.6-1.887-2.36-.7-.95-1.402-2.204-1.887-3.302-1.264-2.86-1.854-6.07-3.184-8.963-.636-1.382-1.71-2.78-2.594-4-.978-1.36-2.073-2.364-2.83-4-.27-.585-.636-1.52-.236-2.123a.93.93 0 0 1 .708-.708c.684-.527 2.59.175 3.302.472 1.89.786 3.47 1.534 5.072 2.595.77.5 1.547 1.496 2.476 1.77h1.06c1.66.382 3.52.12 5.07.59 2.742.833 5.198 2.13 7.43 3.538 6.798 4.292 12.355 10.402 16.157 17.7.612 1.173.876 2.294 1.415 3.538 1.087 2.5 2.456 5.093 3.538 7.547 1.08 2.45 2.13 4.92 3.656 6.958.802 1.07 3.9 1.646 5.307 2.24.987.417 2.603.852 3.538 1.415 1.785 1.077 3.515 2.36 5.19 3.54.837.59 3.41 1.883 3.538 2.948z"/><path d="M144.91 12.798c-.865-.016-1.476.094-2.123.236v.118h.118c.412.848 1.14 1.393 1.65 2.123l1.18 2.476.118-.118c.73-.515 1.065-1.338 1.06-2.595-.293-.308-.336-.694-.59-1.062-.337-.49-1-.768-1.415-1.18z" fill-rule="evenodd"/></g><path d="M194.855 91.708c0 2.97 2.347 4.972 4.972 4.972s4.972-2.002 4.972-4.972-2.347-4.972-4.972-4.972-4.972 2.002-4.972 4.972zm8.83 0c0 2.254-1.723 3.938-3.86 3.938-2.16 0-3.86-1.684-3.86-3.938s1.698-3.938 3.86-3.938c2.135 0 3.86 1.684 3.86 3.938zm-2.52 2.838h1.113l-1.63-2.492c.875-.093 1.537-.518 1.537-1.552 0-1.154-.73-1.63-2.134-1.63h-2.215v5.675h.955v-2.453h.888l1.485 2.453zm-2.374-3.25v-1.63h1.1c.57 0 1.26.106 1.26.77 0 .795-.623.862-1.34.862h-1.02z" style={{fill:"#e48e00"}} fill-rule="evenodd"/></svg>
            </li>

            }
        </ul>
    </div>

    <div id={"me"} className='mt-20 -ml-40 '>
    <div className=" relative flex items-center justify-center overflow-hidden z-50 ">
     
     <div className="relative  h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
         <div className="flex flex-col items-center justify-between lg:flex-row py-16">
             <div className=" ">
      
                 <div className="lg:max-w-xl lg:pr-5 relative z-40">
                     <p className="flex text-sm uppercase text-g1  ">
                          
                         About Me
                     </p>
                     <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                         Alan Compay
                         <span className="my-1 inline-block border-b-8 border-g4 px-4 font-bold text-g4 animate__animated animate__flash">FullStack Developer</span>
                     </h2>
                     <p className="text-base text-gray-800 dark:text-slate-300">
                     I'm a full stack developer focused in React, Nextjs and Tailwind for the Frontend, Node JS and Express for the backend, Mysql for database SQL and MongoDB for database NoSQL
                     </p>
                     
                 </div>
                 
                
             </div>
             <div className="relative lg:ml-32 lg:block lg:w-1/2">
                 <svg xmlns="http://www.w3.org/2000/svg" className=" bg-purple-800 my-6 mx-auto h-10 w-10 animate-bounce rounded-full p-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                 </svg>
                 <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[12rem] rounded-br-none rounded-tl-none  ">
                      <Image alt="myphoto" width={600} height={600} src="/vjgsjl0zglf7ceed6qi6.jpg"/>
                 </div>
             </div>

         </div>


    <h1 className=" w-40 p-3  rounded-lg border-l-4 border-b-4 border-red-900 bg-red-700 text-white dark:text-white font-mono ">
      Skills
    </h1>        
    <ul className='-ml-80 grid grid-flow-col grid-rows-6 space-y-5 mt-4 '>
    <h1 class="pl-10 pt-2 sm:pt-5 text-blue-500 sm:pl-80   ">React <span class=" text-lg text-blue-500">80%</span></h1>
      <li class="mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
          <div class=" w-full h-full bg-gray-200 absolute "></div>
          <div class=" h-full bg-gray-600 sm:bg-blue-500 absolute" style={{width:"80%"}} ></div>
      </li>       

      <h1 class="pl-10 pt-2 sm:pt-5 text-blue-600 sm:pl-80   ">CSS <span class=" text-lg text-blue-600">80%</span></h1>
      <ul class="mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
          <div class=" w-full h-full bg-gray-200 absolute "></div>
          <div class=" h-full bg-red-500 sm:bg-blue-600 absolute" style={{width:"80%"}} ></div>
      </ul>

      <h1 class="pl-10 pt-2 sm:pt-5 text-yellow-500 sm:pl-80   ">Javascript <span class=" text-lg text-yellow-500">80%</span></h1>
      <li class="mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
          <div class=" w-full h-full bg-gray-200 absolute "></div>
          <div class=" h-full bg-green-500 sm:bg-yellow-500 absolute" style={{width:"80%"}} ></div>
      </li>

      <h1 class=" pl-10 pt-2 sm:pt-5 text-slate-700 dark:text-white sm:pl-80   ">Next JS <span class=" text-lg text-White">90%</span></h1>
      <li class="mb-10 mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
          <div class=" w-full h-full bg-gray-200 absolute "></div>
          <div class=" h-full bg-indigo-500 sm:bg-gray-600 absolute" style={{width:"80%"}} ></div>
      </li>

      <h1 class=" pl-10 pt-2 sm:pt-5 text-indigo-500 sm:pl-80   ">Tailwind <span class=" text-lg text-indigo-500">90%</span></h1>
      <li class="mb-10 mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
          <div class=" w-full h-full bg-gray-200 absolute "></div>
          <div class=" h-full bg-indigo-500 sm:bg-indigo-500 absolute" style={{width:"80%"}} ></div>
      </li>

      <h1 class=" pl-10 pt-2 sm:pt-5 text-green-600 sm:pl-80   ">Node JS <span class=" text-lg text-green-600">90%</span></h1>
      <li class="mb-10 mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
          <div class=" w-full h-full bg-gray-200 absolute "></div>
          <div class=" h-full bg-indigo-500 sm:bg-green-600 absolute" style={{width:"80%"}} ></div>
      </li>

      <h1 class=" pl-10 pt-2 sm:pt-5 text-green-500 sm:pl-80   ">Express <span class="text-lg text-green-500">80%</span></h1>
      <li class="mb-10 mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
          <div class=" w-full h-full bg-gray-200 absolute "></div>
          <div class=" h-full bg-indigo-500 sm:bg-green-500 absolute" style={{width:"80%"}} ></div>
      </li>

      <h1 class=" pl-10 pt-2 sm:pt-5 text-blue-400 sm:pl-80   ">MySQL <span class=" text-lg text-blue-400">90%</span></h1>
      <li class="mb-10 mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
          <div class=" w-full h-full bg-gray-200 absolute "></div>
          <div class=" h-full bg-indigo-500 sm:bg-blue-400 absolute" style={{width:"90%"}} ></div>
      </li>
      
      <h1 class=" pl-10 pt-2 sm:pt-5 text-green-700 sm:pl-80   ">MongoDB <span class=" text-lg text-green-700">90%</span></h1>
      <li class="mb-10 mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
          <div class=" w-full h-full bg-gray-200 absolute "></div>
          <div class=" h-full bg-indigo-500 sm:bg-green-700 absolute" style={{width:"90%"}} ></div>
      </li>

      
    </ul>

     </div> 
      
 </div>
    </div>

</div>


  </div>
  

</>

  );
}
 