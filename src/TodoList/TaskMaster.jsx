import React from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';

const TaskMaster = () => {
  return (
    <>
        <header className='w-full p-4 border-b border-b-gray-300'><span className='text-2xl font-semibold '>TaskMaster</span></header>
        <main className='flex flex-col gap-6 h-auto w-full p-4'>
             <AddTask/>
              <TaskList/>
        </main>
       
    </>
  )
}

export default TaskMaster;