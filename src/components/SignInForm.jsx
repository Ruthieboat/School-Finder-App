import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { apiLogin } from '../services/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const SignInForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("userName", user.userName);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      console.log(res.data);

      addToLocalStorage(res.data.accessToken, res.data.user);

      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/schools");
      }, 500);
    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col max-w-[420px] mx-auto">
      <h3 className="text-4xl text-center font-bold">Welcome back</h3>
      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your email"
          className=" border-2 p-2 rounded-md"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Enter your password"
          className="border-2 p-2 rounded-md"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="h-[48px] w-full bg-[#D87357] text-white font-bold rounded-md"
      >
        {isSubmitting ? <Loader /> : "Login"}
      </button>
      <div className="flex flex-col md:flex-row gap-x-2 w-full text-center justify-center">
        <p>Don't have an account?</p>
        <Link to="/signup" className="underline">
          Sign up
        </Link>
      </div>
    </form>
  );
};


export default SignInForm