import React from 'react'

const AddTask = () => {
  function handleChange(e){
  }
  return (
    <>
        <section className='p-4 w-full bg-gray-100 rounded-lg'>
              <form className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold'>Add New Task</h1>
                    <input className='p-2 bg-white outline-teal-700 rounded-sm text-gray-900' type="text" name="Title" value="" onChange ={handleChange} placeholder='Title'/>  
                    <textarea rows={4} className='bg-white text-gray-900 outline-teal-700 rounded-sm p-2' name="Description" value="" onChange ={handleChange} placeholder='Description'/> 
                    <button className='bg-teal-700 hover:bg-teal-600 p-2 rounded-sm text-white w-[120px] flex justify-around items-center'>+ <span>Add Task</span></button>
              </form>  
        </section>
    </>
  )
}

export default AddTask;