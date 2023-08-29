
import Components from '../Components/Components'
import React from 'react';
import Modal from 'react-modal';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon,SelectItem } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import {Button, TextField, Text, Dialog, Flex, Checkbox, Table, } from '@radix-ui/themes'
import { Menu, MenuItem, MenuButton, MenuList } from "@radix-ui/react-menu";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CalendarIcon } from '@radix-ui/react-icons';

 


 import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

// import './styles.css';
import react, { useState } from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {BiBarChartSquare} from "react-icons/bi"
import {HiOutlineFolderDownload} from "react-icons/hi"

import {BiCheckShield} from "react-icons/bi"
import {AiOutlineClockCircle} from "react-icons/ai"
import {AiOutlineDown} from "react-icons/ai"
import {PiCopySimpleFill} from "react-icons/pi"
import {AiFillClockCircle} from "react-icons/ai"

import { Cross2Icon } from '@radix-ui/react-icons';
import { SearchIcon } from '@radix-ui/react-icons';
// import {SearchIcon} from "react-icons/se"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Pages () {
    let datas=[
        {
            id:1,
            name:"AlanBorder",
            activity:"piling",
            tnw:100,
            whb:100,
        },

        {
            id:1,
            name:"david",
            activity:"tube",
            tnw:130,
            whb:170,
        },

        {
            id:1,
            name:"smith",
            activity:"tube",
            tnw:140,
            whb:100,
        },
        {
          id:1,
          name:"smith",
          activity:"tube",
          tnw:140,
          whb:100,
      },

      {
        id:1,
        name:"smith",
        activity:"tube",
        tnw:140,
        whb:100,
    },

    {
      id:1,
      name:"smith",
      activity:"tube",
      tnw:140,
      whb:100,
  },

  {
    id:1,
    name:"smith",
    activity:"tube",
    tnw:140,
    whb:100,
},


    ];

    let staffData = [
      {
        name: "Alan",
        job: "Mech installer"
      },
      {
        name: "David Warner",
        job: "Mech installer"
      },
      {
        name: "Eva green",
        job: "Mech installer"
      },
      {
        name: "Mechal Evans",
        job: "Piler"
      },
      {
        name: "Patric Wayne",
        job: "Piler"
      },
      {
        name: "Alan",
        job: "Mech"
      },
      {
        name: "Alan",
        job: "Mech"
      }
    ]
    let staffDatas = [
      {
        activity: "Surveying",
       
      },
      {
        activity: "Pile Distribution",
      
      },
      {
        activity: "Pre Assembly Of BHA",
        
      },
      {
        activity: "BHA Installation",
         
      },
      {
        activity: "Tracker Bommed",
        
      },
      {
        activity: "Tracker Bommed ",
        
      },
      {
        activity: "Installationn",
         
      },
      {
        activity: "Installationn",
         
      },
      {
        activity: "Installationn",
         
      },
    ]

    const [view, setView] = useState("Table")
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activityIsOpen, openactivity] = React.useState(false);
  const [tabs, setTabs] = useState(0)
  const [startDate, setStartDate] = useState(new Date());
  

  const [startsDate, setStartsDate] = useState(null); 
  const [startedDate, setStartedDate] = useState(null);  //date picker
   //date picker
  function closeModal() {
    setIsOpen(false);
  }
  function closeactivity() {
    openactivity(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'508px',
      height:'510px'
    },
  };
  
  const data = {
    label:  [
      'Pilling',
      'Module Installation',
      'BHA Installation'
    ],
    datasets:[
        {
            label: '',
            data: [70, 70, 68],
            backgroundColor: [
              'rgba(111, 87, 233, 1)',
                'rgba(44, 217, 197, 1)',
                'rgba(252, 122, 2, 1)',
                'rgba(210, 30, 86, 1)',
                'rgba(90, 206, 99, 1)',
                'rgba(02, 88, 12, 1)',
              ],
            borderWidth:0,
        }
    ],
    labels: ["Piling", "INstall", "1000"]
  }

  const options = {
    cutout: 110,
    plugins:{
        legend:{
            display: false
        }
    }
  }

  const lineOptions = {
    tension:0.5,
    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: true
          }
        }
      },
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
      },
    },
  }

  const lineData = {
    labels: ["","10oct-22", "14oct-22", "18oct-22", "22oct-22", "26oct-22", "30oct-22", "03nov-22", "07nov-22","11nov-22"],
    datasets: [
        {
            label: ' hours',
            // y-axis data plotting values
            data: [,5,3,6,8,7,8,4,8],
            fill: false,
            backgroundColor: "#186DEC",
            borderColor:'#186DEC',
            borderWidth:2,
            responsive:true
            }],
}

const datass = {
  label:  [
    'Pilling',
    'Module Installation',
    'BHA Installation'
  ],
  datasets:[
      {
          label: '',
          data: [70, 140,],
          backgroundColor: [
            'rgba(111, 87, 233, 1)',
              'rgba(44, 217, 197, 1)',
              'rgba(252, 122, 2, 1)',
              'rgba(210, 30, 86, 1)',
              'rgba(90, 206, 99, 1)',
              'rgba(02, 88, 12, 1)',
            ],
          borderWidth:0,
      }
  ],
  labels: ["Piling", "INstall", "1000"]
}

const option = {
  cutout: 110,
  plugins:{
      legend:{
          display: false
      }
  }
}

const linesOptions = {
  tension:0.5,
  scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: true
        }
      }
    },
  responsive: true,
  plugins: {
    legend: {
      display:false
    },
    title: {
      display: true,
    },
  },
}

const linesData = {
  labels: ["10oct-22", "14oct-22", "18oct-22", "22oct-22", "26oct-22", "30oct-22", "03nov-22", "07nov-22","11nov-22"],
  datasets: [
      {
          label: ' hours',
          // y-axis data plotting values
          data: [28, 38 ,30, 40, 25, 30, 60, 40, 20],
          fill: false,
          backgroundColor: "#186DEC",
          borderColor:'#186DEC',
          borderWidth:2,
          responsive:true
          }],
}


    return (
        <Components>
            <div className='table pt-2 w-full'>
                <div className='flex justify-between ml-3'>
                    <div className='pl-4'>
                         <AiOutlineArrowLeft className='ml-2'/> 
                        <p className='text-xl mb-3 pt-4 pl-2 font-semibold'>Summary</p>
                    </div>
                    <div className='flex justify-between pt-8 pr-8'>
                      <div className={`flex px-2 h-7 text-center py-1 ${tabs === 0 ? " opacity-70 bg-red-100 rounded-xl text-red-500" : "text-gray-400"}`} onClick={() => {setTabs(0)}}>
                        <p className='flex cursor-pointer text-xs font-semibold pr-10'>
                          <BiBarChartSquare className='mt-1 mr-2'/>Construction Progress</p>
                      </div>

                      <div className={`flex px-2 h-7 text-center py-1 ${tabs === 1 ? "opacity-70 bg-red-100 rounded-xl text-red-500" : "text-gray-400"}`} onClick={() => {setTabs(1)}}>
                        <p className='flex pl-2 cursor-pointer text-xs font-semibold pr-10'>
                        <BiCheckShield className='mt-1 mr-2'/>
                        Quality Check</p>
                      </div>
                  
                      <div className={`flex px-2 h-7 text-center py-1 ${tabs === 2 ? "opacity-70 bg-red-100 rounded-xl text-red-500" : "text-gray-400"}`} onClick={() => {setTabs(2)}}>
                          <p className='flex pl-2 cursor-pointer text-xs font-semibold pr-10'>
                          <AiOutlineClockCircle className='mt-1 mr-2 ' />
                          Work Hours</p>
                      </div>
                        
                    </div>
                </div>
                <hr/>
                 {/* <div className="w-full max-w-xs">
      <DatePicker
        value={startDate}
        onValueChange={(newDate) => setStartDate(newDate)}
      >
        <input
          type="text"
          className="w-full py-2 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Start Date"
        />
      </DatePicker>
    </div> */}
                <div className='flex justify-between pl-4' >
                    <div className='flex py-3'>
                      
                    <div className='flex justify-between pl-4'>
      <div className='flex py-2'>
        <div className="pl-2 flex items-center pr-21 pt-2 pb-2 border rounded-xl">
          <CalendarIcon className=" mr-2 text-gray-600" />
          <DatePicker
            selected={startedDate}
            onChange={date => setStartedDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Start date"
            className="text-gray-600 text-sm focus:outline-none "/>
          
        </div>
      </div>
    </div>    

  
          <div className='pl-4 pt-2'>
          <div className="pl-2 flex items-center pr-21 pt-2 pb-2 border rounded-xl">
          <CalendarIcon className=" mr-2 text-gray-600" />
          <DatePicker
            selected={startsDate}
            onChange={date => setStartsDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="End date"
            className="text-gray-600 text-sm focus:outline-none "/>
          
        </div>
                  
                </div>              
                    
              </div>
                    <div className='flex mr-8'>
                    <DropdownMenu.Root>
                    <AiOutlineSearch className=' mt-9  text-gray-400 mr-4'/>

                            <DropdownMenu.Trigger asChild>
                              <p className=" cursor-pointer  inline-flex items-center justify-center text-gray-400 text-sm " >View Summary Chart
                                <AiOutlineDown className='ml-1  pt-1 text-gray-400' />
                                </p>
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Portal>
                              <DropdownMenu.Content
                                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                                sideOffset={5}
                              >
                                
                                <DropdownMenu.Item className=" staff p-4 cursor-pointer" >
                                  <p onClick={() => setIsOpen(true)}>Staff</p>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className=" cursor-pointer p-4">
                                <p onClick={() => openactivity(true)}>Activity</p>
                                  <div className=" ">
                                  </div>
                                </DropdownMenu.Item>
                                
                              </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                          </DropdownMenu.Root>
                          <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Staff table"
                            >
                              <div className='flex justify-between'>
                                <p className='font-bold text-xl'>Select Staff</p>
                                <p className='cursor-pointer' onClick={() => setIsOpen(false)}>X</p>
                              </div>
                              <div className="flex items-center p-2 rounded-full shadow-md">
                                    <div className="mr-2  ">
                                      <AiOutlineSearch className=" text-gray-500" />
                                    </div>
                                    <input 
                                      type="search"
                                      placeholder="Search..."
                                      className="  flex-grow bg-transparent border-none"
                                    />
                                  </div>
                                      <div className='pt-1 p-6 overflow-auto 'style={{ height: '300px'}}>
                                        {staffData.map((i) => {
                                          return(
                                            <div className='pt-4'>
                                              <label style={{ display: 'flex', alignItems: 'center' }}>
                                              <input type='radio' name='activity' value='two' />
                                                <div className='pl-4 cursor-pointer'>
                                                <img src='/av2.png' alt='Image Two' style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '8px' }} />
                                                </div>
                                                  <div className='pl-2 cursor-pointer'>
                                                    <p className='text-base'>{i.name}</p>
                                                    <p className='text-gray-400 text-sm'>{i.job}</p>
                                                  </div>
                                              </label>
                                            </div>
                                          )
                                        })}
                                        <div>
                                      </div>
                                  </div>
                                  <hr/>
                                  <div className='flex justify-end pt-5 bg-white' >
                                      <button className=' border border-2 py-2 px-4 rounded-full mr-2 'onClick={closeModal}>Cancel</button>
                                      <button className='bg-red-500 text-white py-2 px-4 rounded-full' onClick={() => {setView("Staff"); setIsOpen(false)}}>Generate Summary</button>
                                  </div>

                          </Modal>
                          <Modal
                            isOpen={activityIsOpen}
                            onRequestClose={closeactivity}
                            style={customStyles}
                            contentLabel="Staff table"
                            >
                              <div className='flex justify-between'>
                                <p className='font-bold text-xl'>Select Activity</p>
                                <p className='cursor-pointer' onClick={() => setIsOpen(false)}>X</p>
                              </div>
                              <div className="flex items-center p-2 pt-6 rounded-full shadow-md">
                                    <div className="mr-2  ">
                                      <AiOutlineSearch className=" text-gray-500" />
                                    </div>
                                    <input 
                                      type="search"
                                      placeholder="Search..."
                                      className="  flex-grow bg-transparent border-none"
                                    />
                                  </div>
                                      <div className='pt-1 p-6 overflow-auto 'style={{ height: '300px'}}>
                                        {staffDatas.map((i) => {
                                          return(
                                            <div className='pt-4'>
                                              <label style={{ display: 'flex', alignItems: 'center' }}>
                                              <input type='radio' name='activity' value='two' />
                                                <div className='pl-4 cursor-pointer'>
                                                </div>
                                                  <div className='pl-2 cursor-pointer'>
                                                    <p className='text-base'>{i.activity}</p>
                                                  </div>
                                              </label>
                                            </div>
                                          )
                                        })}
                                        <div>
                                      </div>
                                  </div>
                                  <hr/>
                                  <div className='flex justify-end pt-5 bg-white' >
                                      <button className=' border border-2 py-2 px-4 rounded-full mr-2 'onClick={closeactivity}>Cancel</button>
                                      <button className='bg-red-500 text-white py-2 px-4 rounded-full' onClick={() => {setView("Activity"); openactivity(false)}}>Generate Summary</button>
                                  </div>

                          </Modal>
                    </div>
                </div>
                <hr/>
                {view === "Table" ?
                <table className='table border-2 w-full mt-10'>
                    <thead>
                        <tr>
                            <th rowSpan="2" className=' text-sm font-semibold text-center bg-gray-100'>Staff</th>
                            <th  rowspan="2"  className='  border-2 text-sm font-semibold text-center bg-gray-100'>Activity</th>
                            <th  rowspan="2"  className='  border-2 text-sm font-semibold text-center bg-gray-100'>Total work Hours</th>
                            <th rowspan="2" className='  border-2 text-sm font-semibold text-center bg-gray-100'>Work hours breakdown</th>
                            <th colSpan="2" className=' border-2 text-sm font-semibold text-center bg-gray-100'>Daily work hours</th>
                        </tr>
                        <tr>
                          <th className=' border-2 text-sm font-semibold text-center '>28-AUG-2023</th>
                          <th className=' border-2 text-sm font-semibold text-center  '>29-AUG-2023</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data) => (
                            <tr key={data.id}>
                                <td className='border-2 text-gray-500 text-center'>{data.name}</td>
                                <td className=' border-2 text-gray-500 text-center'>{data.activity}</td>
                                <td className=' border-2 text-gray-500 text-center'>{data.tnw}</td>
                                <td className=' border-2 text-gray-500 text-center'>{data.whb}</td>
                                <td className='border-2 text-gray-500 text-center'>8</td>
                                <td className='border-2 text-gray-500 text-center'>4</td>
                                <td>{/*daily work hours here */}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                :
                view === "Staff" ?
                  <div>
                    <div className='border-r-2 ' >
                        <div className='flex py-4 justify-between ml-4'>
                          <div className='pl-2 flex cursor-pointer  '>
                            <img src='/av2.png' alt='Image Two' style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '8px' }} />
                            <div>
                              <p className=' text-base'>Alan Border</p>
                              <p className=' text-gray-400 text-sm'> Mach Installer</p>
                            </div>
                            <AiOutlineDown className='m-5 '/>
                          </div>
                          <div className='flex m-4 cursor-pointer'>
                            <HiOutlineFolderDownload className='mt-1 mr-2'/>
                            <p className=' '>Download</p>
                          </div> 
                        </div>                           
                                                 
                                              
                                              <hr/>
                                              <div className='flex '>
                                              <div className='border-r-2' style={{width: "748px", height: "510px"}}>
                                               <div>
                                               <p className='text-lg font-bold pl-2 pt-6 ml-4'>Work Summary  <p className='float-right mr-12 text-xs text-gray-500 font-thin pl-1 '>copy image</p>< PiCopySimpleFill  className='mt-1 float-right text-xs text-gray-500'/></p>
                                                <p className='text-xs text-gray-400 pl-2 mt-3  flex ml-4 '>Total Work Hours <AiFillClockCircle className='flex mt-1 ml-1 mr-2'/>208Hrs</p> 
                                                </div>
                                                <Line options={lineOptions} data={lineData} />

                                               </div>
                                              <div className='   ' style={{width: "600px", height: "300px"}}>
                                                <div className=' pt-4'>
                                                  <p className='text-lg font-bold pl-4 '>Summary Based  <p className='float-right pr-7 text-xs text-gray-500 font-thin pl-1'>copy image</p>< PiCopySimpleFill  className='mt-1 float-right text-xs text-gray-500'/>
                                                    <br/>  On Activities </p>
                                                </div>
                                                <Doughnut data={data} options={options} className=' m-auto '/>
                  
                                                        <div className=' p-4'>
                                                          <div className='flex justify-between'>
                                                            <div className='flex pl-2 p-2' >
                                                              <p className='w-6 h-6 rounded-full bg-red-500'></p>
                                                              <p className='flex text-xs  pl-2 '>Pilling </p>
                                                            </div>
                                                            <p className='flex pl-2 text-xs'>70 Hours</p>
                                                          </div>
                                                          <div className='flex justify-between'>
                                                          <div className='flex pl-2 p-2'>
                                                              <p className='w-6 h-6 rounded-full bg-yellow-500  '></p>
                                                              <p className='flex   text-xs pl-2'>Module  </p>
                                                              </div>
                                                               <p className='flex  text-xs '>70 Hours</p>
                                                          </div>
                                                          <div className='flex justify-between'>
                                                          <div className='flex pl-2 p-2'>
                                                              <p className='w-6 h-6 rounded-full bg-blue-500'></p>
                                                              <p className='flex   text-xs pl-2'>BHA Installation</p> 
                                                              </div>
                                                               <p className='flex   text-xs'>68 Hours</p>
                                                          </div>
                                                        </div> 
                                                    
                                              </div>
                      
                                        </div>
                                      </div>
                                      
                  </div>
                :
                <div>
                <div className='  ' >
                    <div className='flex py-2 justify-between'>
                      <div className='pl-2 flex cursor-pointer  '>
                        <div>
                          <p className=' text-bold font-900 pl-6 pt-4'>Pile Distrubition</p>
                        </div>
                        
                      </div>
                      <div className='flex m-4 cursor-pointer'>
                        <HiOutlineFolderDownload className='mt-1 mr-2'/>
                        <p className=' '>Download</p>
                      </div> 
                    </div>  
                    <hr/>
                    </div>
                  <div> <div className='flex '>
                  <div className='border-r-2' style={{width: "748px", height: "510px"}}>
                   <div>
                   <p className='text-lg font-bold pl-2 pt-6 pl-6'>Work Summary  <p className='float-right mr-12 text-xs text-gray-500 font-thin pl-1'>copy image</p>< PiCopySimpleFill  className='mt-1 float-right text-xs text-gray-500'/></p>
                    <p className='text-xs text-gray-400 pl-2 mt-3  flex pl-6 '>Total Work Hours <AiFillClockCircle className='flex ml-2 mr-2'/>  208Hrs</p> 
                    </div>
                    <Line options={linesOptions} data={linesData} />

                   </div>
                  <div className='   ' style={{width: "600px", height: "300px"}}>
                    <div className='p-8'>
                      <p className='text-lg font-bold '>Summary Based  <p className='float-right text-xs text-gray-500 font-thin pl-1'>copy image</p>< PiCopySimpleFill  className='mt-1 float-right text-xs text-gray-500'/>
                        <br/>  On Activities </p>
                    </div>
                    <Doughnut data={datass} options={option} className=' m-auto '/>

                            <div className=''>
                              <div className='flex justify-between'>
                                <div className='flex p-2'>
                                  <p className='w-6 h-6 rounded-full bg-blue-500'></p>
                                  <p className='flex text-base font-600  pl-2 '>Piling Distrubution </p>
                                </div>
                                <p className='flex pl-2 text-xs'>60 Hours</p>
                              </div>
                              <div className='flex justify-between'>
                              <div className='flex p-2'>
                                  <p className='w-6 h-6 rounded-full bg-green-300'></p>
                                  <p className='flex text-xs  pl-2 '>Others </p>
                                </div>
                                <div className='flex'> 
                                <p className='flex pl-2 text-xs'>140 Hours</p>
                              </div>
                              </div>
                              </div>
                
                  </div>
                </div></div>
                </div>
                }
            </div>
            
        </Components>
    )
}
 
export default Pages