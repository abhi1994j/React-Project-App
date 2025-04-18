import { useRef, useState } from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';

const TaskMaster = () => {
  
  const [isSubmit , setIsSubmit] = useState(false)
  const [ taskList, setTaskList ] = useState( ()=> localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")) : [])
  return (
    <>
        <header className='w-full p-4 border-b border-b-gray-300'><span className='text-2xl font-semibold '>TaskMaster</span></header>
        <main className='flex flex-col gap-6 h-auto w-full p-4'>
             <AddTask taskList={taskList} setTaskList={setTaskList} isSubmit={isSubmit} setIsSubmit={setIsSubmit}/>
              <TaskList taskList={taskList} setTaskList={setTaskList}/>
        </main>
       
    </>
  )
}

export default TaskMaster;