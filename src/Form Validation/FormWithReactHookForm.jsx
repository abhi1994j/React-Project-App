import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormWithReactHookForm = () => {
  const [Data , setData] = useState(()=>localStorage.getItem("arr") ? JSON.parse(localStorage.getItem("arr"))  : [])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(()=>{
    localStorage.setItem("arr" ,JSON.stringify(Data))
  },[Data])
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setData([...Data , data])
    
    reset();
  };
  console.log(Data);
  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 mt-10"
    >
      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
          })}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Submit</button>
    </form>
  );
};

export default FormWithReactHookForm;
