import React from 'react'
import { MdOutlineEditCalendar , MdOutlineTaskAlt  } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
const TaskList = () => {
  return (
    <>
        <section className='p-4 w-full bg-gray-100 rounded-lg'>
                <div className='flex flex-col'>
                      <h1 className='text-2xl font-semibold mb-6'>Task List</h1>
                      <div className='flex gap-1 mb-2'>
                          <button className='active:bg-white active:text-black hover:text-white hover:bg-teal-600 active:shadow-sm shadow-gray-400 text-gray-600 cursor-pointer p-2 rounded-sm'>All</button>
                          <button className='active:bg-white active:text-black hover:bg-teal-600 active:shadow-sm hover:text-white shadow-gray-400 text-gray-600 cursor-pointer p-2 rounded-sm'>Incomplete</button>
                          <button className='active:bg-white active:text-black hover:bg-teal-600 hover:text-white active:shadow-sm shadow-gray-400 text-gray-600 cursor-pointer p-2 rounded-sm'>Completed</button>
                      </div>
                      <div className='py-2 px-6 bg-gray-200 flex justify-between rounded-sm items-center mb-2'>
                          <div className='flex items-center gap-6'>
                               <button className='hover:bg-teal-600 hover:text-white rounded-sm active:text-green-400'><MdOutlineTaskAlt className='text-xl m-3 '/></button>
                               <div className=''>
                                    <p className='font-normal overflow-hidden'>hhhhhhhh</p>
                                    <p className='text-[12px] text-gray-500'>hhhhhhh</p>
                                    <p className='text-[12px] text-gray-500'>Created At 16/04/2025</p>
                               </div>
                          </div>
                          <div className='flex items-center gap-6'>
                              <button><MdOutlineEditCalendar /></button>
                              <button><RiDeleteBinLine /></button>
                          </div>
                      </div>
                     
                </div>
        </section>
    </>
  )
}

export default TaskList;