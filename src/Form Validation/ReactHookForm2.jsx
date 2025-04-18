import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { RxValue } from 'react-icons/rx';
import { toast } from 'react-toastify';

const ReactHookForm2 = () => {
 const {register , handleSubmit , watch , formState: {errors ,  isSubmitting} , reset}  = useForm({mode:"onBlur"})
 const [input, setInput] = useState('') 
 const onSubmit =(data)=>{
  // console.log("Form Data" , data);
  const {Email} = data;
  setInput(Email)
  toast.success("Submit is Successful")
  reset();
 }
 console.log(input);
 const password = watch("password");
  return (
    <>
         <form className="max-w-md mx-auto my-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 w-full mb-5 group">
          <input  
            type="email"  
            {...register("Email" , {
              required: "Email is required" ,
              pattern:{
                value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email is Invalid"
              }            
            })}   
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=''
          />
          {errors.Email && <p className="text-red-400 text-sm mt-2">{errors.Email.message}</p> } 
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            {...register("password" , {
              required: "Password is required" ,
              minLength:{
                value:4 ,
                message:"Password must be 4 characters"
              }
            })}   
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=''  
          />
          {errors.password && <p className="text-red-400 text-sm mt-2">{errors.password.message}</p> } 
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input  
            type="password" 
            {...register("ConfirmPassword" , {
              required: "Confirm Password is required" ,
              validate:(value)=> value === password || "Passwords do not match"
            })}            
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=''
          />
           {errors.ConfirmPassword && <p className="text-red-400 text-sm mt-2">{errors.ConfirmPassword.message}</p> } 
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <button
          type="submit" disabled={isSubmitting}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         {isSubmitting ? "...loading" : "Submit"}
        </button>
      </form>
    </>
  )
}

export default ReactHookForm2;