import { useState } from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useForm } from 'react-hook-form';

const TaskMaster = () => {
  
  const [isSubmit , setIsSubmit] = useState(false) 
  const [editId, setEditId] = useState(null);
  const [isUpdated , setIsUpdated] = useState(false)
  const {register , handleSubmit  , formState: {errors} , reset} = useForm();
  const [ taskList, setTaskList ] = useState( ()=> localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")) : [])

  function handleUpdate(id) {
    setIsUpdated(true);
    setEditId(id); // Track which task to update
    const selectedTask = taskList.find((ele) => ele.id === id);
    if (selectedTask) reset(selectedTask);
  }
  
  return (
    <>
        <header className='w-full p-4 border-b border-b-gray-300'><span className='text-2xl font-semibold '>TaskMaster</span></header>
        <main className='flex flex-col gap-6 h-auto w-full p-4'>
             <AddTask taskList={taskList} setTaskList={setTaskList} isSubmit={isSubmit} setIsSubmit={setIsSubmit} handleSubmit={handleSubmit} register={register} reset={reset} errors={errors} isUpdated={isUpdated} setIsUpdated={setIsUpdated} editId={editId}
  setEditId={setEditId}/>
              <TaskList taskList={taskList} setTaskList={setTaskList} handleUpdate={handleUpdate}/>
        </main>
       
    </>
  )
}

export default TaskMaster;