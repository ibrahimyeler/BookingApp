import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import apiClient from '../api-client';

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: () => {
      setIsSubmitted(true);
      setErrorMessage(null);
    },
    onError: (error: any) => {
      const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
      setErrorMessage(errorMsg);
      setIsSubmitted(false);
    },
  });

  const onSubmit = (data: SignInFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col items-center">
      {isSubmitted ? (
        <div className="flex flex-col gap-5 text-center">
          <h2 className="text-3xl font-bold text-green-500">Successfully Signed In!</h2>
          <p className="text-sm text-gray-600 mt-2">
            You can now <a href="/dashboard" className="text-blue-500 hover:underline">Go to Home Page</a>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Sign In</h2>
          <div className="flex flex-col gap-5">
            <label className="text-gray-700 text-sm font-bold">
              Email
              <input
                type="email"
                {...register('email', { required: 'Please fill this field' })}
                className="border rounded w-full py-2 px-4 font-normal transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </label>
            <label className="text-gray-700 text-sm font-bold">
              Password
              <input
                type="password"
                {...register('password', { required: 'Please fill this field' })}
                className="border rounded w-full py-2 px-4 font-normal transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </label>
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <button type="submit" className="bg-blue-500 text-white py-1 px-2 rounded text-sm mt-5 transition-all duration-300 ease-in-out transform hover:scale-110">
            Sign In
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Don't have an account? <a href="/register" className="text-blue-500 hover:underline ml-1">Register</a>
          </p>
        </form>
      )}
    </div>
  );
};

export default SignIn;
