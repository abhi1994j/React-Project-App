import React from "react";
import { MdOutlineEditCalendar, MdOutlineTaskAlt } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const TaskList = (props) => {
  const {taskList , setTaskList} = props ;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this task?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const filteredList = taskList.filter((ele) => ele.id !== id);
        setTaskList(filteredList);
        Swal.fire("Saved!", "", "success");
      } 
    });
  };
  
  return (
    <>
      <section className="p-4 w-full bg-gray-100 rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-6">Task List</h1>
          <div className="flex gap-1 mb-2">
            <button className="text-sm active:bg-white active:text-black hover:text-white hover:bg-teal-700 active:shadow-sm shadow-gray-400 text-gray-600 cursor-pointer p-2 rounded-sm">
              All
            </button>
            <button className="text-sm active:bg-white active:text-black hover:bg-teal-700 active:shadow-sm hover:text-white shadow-gray-400 text-gray-600 cursor-pointer p-2 rounded-sm">
              Incomplete
            </button>
            <button className="text-sm active:bg-white active:text-black hover:bg-teal-700 hover:text-white active:shadow-sm shadow-gray-400 text-gray-600 cursor-pointer p-2 rounded-sm">
              Completed
            </button>
          </div>
          <div className="rounded-lg border border-gray-200">
            {taskList.map((task)=>
                // console.log(task.id)
                 <div key={task.id} className="py-2 px-6 bg-gray-200 hover:bg-gray-300 flex justify-between rounded-sm items-center mb-2">
                    <div className="flex items-center gap-6">
                      <button className="hover:bg-teal-700 hover:text-white rounded-sm active:text-green-400">
                        <MdOutlineTaskAlt className="text-lg m-3 " />
                      </button>
                      <div className="">
                        <p className="font-normal overflow-hidden">{task.title}</p>
                        <p className="text-[12px] text-gray-500">{task.description}</p>
                        <p className="text-[12px] text-gray-500">
                          Created At {task.date}
                        </p>
                      </div>
                    </div>
                 <div className="flex items-center gap-1">
                   <button className="hover:bg-teal-700 hover:text-white rounded-sm">
                     <MdOutlineEditCalendar className="text-lg m-3 " />
                   </button>
                   <button className="hover:bg-teal-700 hover:text-white rounded-sm">
                     <RiDeleteBinLine className="text-lg m-3 " onClick={()=>handleDelete(task.id)}/>
                   </button>
                 </div>
               </div>  
            )}
              
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskList;
