import React from "react";
import { useForm } from "react-hook-form";

export default function ReactHookForn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it
  const Input = ({ label, register, required }) => (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
  // you can use React.forwardRef to pass the ref too
  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  ));

  return (
    <form className="max-w-md mx-auto my-10" onSubmit={handleSubmit(onSubmit)}>
      {" "}
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
          className="block mb-6 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Enter your Email"
        />
         <Select label="Age" {...register("Age")} />
        {/* register your input into the hook by invoking the "register" function */}
        {/* errors will return when field validation fails  */}
        {errors.email && (
          <span className="text-red-400 mb-4">This field is required</span>
        )}
        <br />
        <input type="submit" />
      </div>
    </form>
  );
}
