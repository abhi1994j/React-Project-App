import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTask = (props) => {
  const {taskList , setTaskList , isSubmit , setIsSubmit} = props ;
  const {register , handleSubmit  , formState: {errors} , reset} = useForm();

  const onSubmit = (data)=>{
      console.log("Form data" , data);
      const {Title , Description} = data;
      toast.success("Submit Task Successfully");
      const newTask = {
        id: Date.now(),
        title: Title,
        description: Description,
        date: new Date().toLocaleDateString('en-GB'),
      };
     
      setTaskList([...taskList , newTask]);
      setIsSubmit(true);
      reset();
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
                    <button type='submit' className='bg-teal-700 hover:bg-teal-600 p-2 rounded-sm text-white w-[120px] flex justify-around items-center'>+ <span>Add Task</span></button>
              </form>  
        </section>
    </>
  )
}

export default AddTask;