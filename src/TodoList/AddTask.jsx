import { useEffect } from 'react';
import { toast } from 'react-toastify';

const AddTask = (props) => {
  const {taskList , setTaskList  , setIsSubmit , handleSubmit ,register ,reset , errors , isUpdated , setIsUpdated , editId , setEditId } = props ;
  

  const onSubmit = (data)=>{
      console.log("Form data" , data);
      const {Title , Description} = data;
      toast.success("Submit Task Successfully");
      if (isUpdated) {
        const updatedList = taskList.map((task) =>
          task.id === editId ? { ...task, ...data } : task
        );
        setTaskList(updatedList);
        setIsUpdated(false);
        setEditId(null);
      } else {
        const newTask = {
          id: Date.now(),
          ...data,
        };
        setTaskList([...taskList, newTask]);
      }
      reset(); // Clear form after submit
      setIsSubmit(true);
      localStorage.setItem("taskList", JSON.stringify(taskList));
    
  }
 
  useEffect(()=>{
    if(isSubmit){
      localStorage.setItem("taskList" , JSON.stringify(taskList))
    }  
  }, [taskList])

  
  return (
    <>
        <section className='p-4 w-full bg-gray-100 rounded-lg'>
              <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-2xl font-semibold'>Add New Task</h1>
                    <input className='p-2 bg-white outline-teal-700 rounded-sm text-gray-900' type="text" 
                    {...register("Title" ,{
                      required: "Title is Required"
                    })}
                    placeholder='Title'/>  
                    {errors.Title && <p className="text-red-400 text-sm ">{errors.Title.message}</p>}
                    <textarea rows={4} className='bg-white text-gray-900 outline-teal-700 rounded-sm p-2'
                    {...register("Description" ,{
                      required: "Description is Required"
                    })}
                    placeholder='Description'/> 
                    {errors.Description && <p className="text-red-400 text-sm ">{errors.Description.message}</p>}
                    <button type='submit' className='bg-teal-700 hover:bg-teal-600 p-2 rounded-sm text-white w-[120px] flex justify-around items-center'>+ <span>{isUpdated ? "Edit Task" : "Add Task"}</span></button>
              </form>  
        </section>
    </>
  )
}

export default AddTask;