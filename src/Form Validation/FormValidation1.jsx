import { useState } from "react";
import { CgPassword } from "react-icons/cg";
import { toast } from "react-toastify";

const FormValidation1 = () => {
  const initialValue={
    email:'',
    password:'',
    cpassword:'',

  }
const [value , setValue] = useState(initialValue);
const [errors , setErrors] = useState({});
const [isSubmit , setIsSubmit] = useState(false);

  function validate(val){
      const error = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(val.email.trim() === ""){
        error.email = "Email is required"
      }else if(!emailRegex.test(val.email)) error.email = "Email is not Valid";
      if(val.password.trim() === ""){
        error.password = "Password is required" ;
      } 
      else if(val.password.length < 3) error.password ="Password must have 4 characters" ;
      if(val.cpassword.trim() === ""){
        error.cpassword = "Confirm Password is required" ;
      } 
      else if(val.password !== val.cpassword) error.cpassword = "Passowords are not match" ;
      return error;     
  }

  function handleSubmit(e){
    e.preventDefault()
    const validateErrors = validate(value) ;
    setErrors(validateErrors)
    if(Object.keys(validateErrors).length === 0){
      setIsSubmit(true)
      setValue(initialValue)
      toast.success("Submit are Successful")
    }
    else{
      setIsSubmit(false)
    }
  }

  function handleChange(e){
      const {name,value:val} = e.target;
      setValue({...value , [name]:val})
      if(validate(value)) setErrors('')
  }
  return (
    <>
      <form className="max-w-md mx-auto my-10" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input  value={value.email} onChange={handleChange}
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            
          />
          {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p> } 
          <label
            for="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input  value={value.password} onChange={handleChange}
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "        
          />
          {errors.password && <p className="text-red-400 text-sm mt-2">{errors.password}</p> } 
          <label
            for="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input  value={value.cpassword} onChange={handleChange}
            type="password"
            name="cpassword"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "          
          />
           {errors.cpassword && <p className="text-red-400 text-sm mt-2">{errors.cpassword}</p> } 
          <label
            for="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormValidation1;
