import { useForm } from "react-hook-form";

type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();

    const onSubmit = (data: RegisterFormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Create an Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-gray-700 text-sm font-bold">
                    First Name
                    <input
                        {...register('firstName', { required: 'First name is required' })}
                        className="border rounded w-full py-1 px-2 font-normal"
                    />
                </label>
                <label className="text-gray-700 text-sm font-bold">
                    Last Name
                    <input
                        {...register('lastName', { required: 'Last name is required' })}
                        className="border rounded w-full py-1 px-2 font-normal"
                    />
                </label>
            </div>
            <div className="flex flex-col gap-5">
                <label className="text-gray-700 text-sm font-bold">
                    Email
                    <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="border rounded w-full py-1 px-2 font-normal"
                    />
                </label>
                <label className="text-gray-700 text-sm font-bold">
                    Password
                    <input
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        className="border rounded w-full py-1 px-2 font-normal"
                    />
                </label>
                <label className="text-gray-700 text-sm font-bold">
                    Confirm Password
                    <input
                        type="password"
                        {...register('confirmPassword', { required: 'Confirm password is required' })}
                        className="border rounded w-full py-1 px-2 font-normal"
                    />
                </label>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
        </form>
    );
};

export default Register;
