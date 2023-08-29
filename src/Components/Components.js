import react, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import {AiOutlineDashboard} from "react-icons/ai"
import {FiLayers} from "react-icons/fi"
import {CgProfile} from "react-icons/cg"
import {HiOutlineDocumentReport} from "react-icons/hi"
import {HiOutlineCube} from "react-icons/hi"
import {HiMiniArrowRightOnRectangle} from "react-icons/hi2"
import {AiOutlineArrowLeft} from "react-icons/ai"




function Components(props){

    const navigate = useNavigate()

    const [projects, setProjects] = useState(0)
    const [tab, setTab] = useState(0)

    return(

          <div className="flex border-r">
            <div className='bg-gray-100 pt-4' style={{width: "178px",height:"900px" }}>
              <div className='pl-2 rounded-lg pb-10  '>
                <img src="/surya.png" alt='' width="100px" />
              </div>

              <div className='mb-10 pl-4 pt-2'> 
                <p className='flex  text-lg font-bold pr-14'>
                    <img src="/projects.png" alt='' width="24px" height="24px" />
                      Projects
                  </p>
              </div>
              <div className="text-gray-400 mb-4 cursor-pointer font-medium text-base text-2xl   "> 
                <p className={`hover:bg-red-400 hover:text-white my-2 ${projects === 0 ? "text-white bg-red-400" : "text-gray-400 hove:bg-red-400"}  pl-6 py-2 `} onClick={() => setProjects(0)}>
                  Concord
                </p> 
                <p className={`hover:bg-red-400 hover:text-white my-2 ${projects === 1 ? "text-white bg-red-400" : "text-gray-400 hove:bg-red-400"}  pl-6 py-2  `} onClick={() => setProjects(1)}>
                  Sna deigo
                  </p>
                <p className={`hover:bg-red-400 hover:text-white my-2 ${projects === 2 ? "text-white bg-red-400" : "text-gray-400 hove:bg-red-400"}  pl-6 py-2 `} onClick={() => setProjects(2)}>
                  Fresno
                  </p> 
                <p className={`hover:bg-red-400 hover:text-white my-2 ${projects === 3 ? "text-white bg-red-400" : "text-gray-400 hove:bg-red-400"} pl-6 py-2 `} onClick={() => setProjects(3)}> 
                Sacramento
                </p>  
                <p className={`hover:bg-red-400 hover:text-white my-2 ${projects === 4 ? "text-white bg-red-400" : "text-gray-400 hove:bg-red-400"} pl-6 py-2 `} onClick={() => setProjects(4)}>
                  Bakersfield
                  </p>     
              </div>
              
            </div>
            <div className="w-full bg-white pt-6 pb-8  font-family: 'Manrope', sans-serif">
              <div className='flex justify-between' style={{width: "1262px" }} >
                <div className='flex '>
                  <div className={`cursor-pointer flex mx-3 pb-3 ${tab === 0 ? " text-red-400 border-b-4 border-red-500 text-gray-400 " : "text-gray-400"} px-2`} onClick={() => setTab(0)}>
                    <AiOutlineDashboard className=' pr-1' style={{width: "25px", height: "25px"}} />
                    <p className="pl-2 font-family: 'Manrope'">Dashboard </p>
                  </div>
                  <div className={`cursor-pointer flex mx-3 pb-3 ${tab === 1 ? " text-red-400 border-b-4 border-red-500 text-gray-400 " : "text-gray-400"} px-2`} onClick={() => setTab(1)}>
                    <FiLayers className=' pr-1' style={{width: "25px", height: "25px"}} />
                    <p className='pl-2'>Setup </p>
                  </div>
                  <div className={`cursor-pointer flex mx-3 pb-3 ${tab === 2 ? " text-red-400 border-b-4 border-red-500 text-gray-400 " : "text-gray-400"} px-2`} onClick={() => setTab(2)}>
                    <CgProfile className=' pr-1' style={{width: "25px", height: "25px"}} />
                    <p className='pl-2 '>Staff&plant</p>
                  </div>
                  <div className={`cursor-pointer flex mx-3 pb-3 ${tab === 3 ? " text-red-400 border-b-4 border-red-500  text-gray-400 " : "text-gray-400"} px-2`} onClick={() => setTab(3)}>
                    <HiOutlineDocumentReport className=' pr-1' style={{width: "25px", height: "25px"}} />
                    <p className= {`pl-2`}>Report</p>
                  </div>
                  <div className={`cursor-pointer flex mx-3 pb-3 ${tab === 4 ? " text-red-400 border-b-4 border-red-500 text-gray-400 " : "text-gray-400"} px-2`} onClick={() => setTab(4)}>
                    <HiMiniArrowRightOnRectangle className=' pr-1' style={{width: "25px", height: "25px"}} />
                    <p className='pl-2'>Access Rights</p>   
                  </div>  
                </div>      
              </div>
              <hr/>
              <div className='' style={{width: "calc(100vw - 178px)"}}>
                {props.children}
              </div>
            </div>
            

            </div>
        )
 
}
export default Components
