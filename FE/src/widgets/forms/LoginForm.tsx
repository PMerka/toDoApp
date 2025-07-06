import { useForm } from "react-hook-form";
import BlueButton from "../BlueButton";

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onLoginSubmit: (data: LoginFormValues) => void;
}

const loginFormDefaultValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onLoginSubmit }: LoginFormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: loginFormDefaultValues,
  });

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login to Your Account
      </h2>
      <form
        className="space-y-5"
        onSubmit={handleSubmit((data) => {
          onLoginSubmit(data);
        })}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            {...register("email")}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            {...register("password")}
          />
        </div>

        <BlueButton>Login</BlueButton>
      </form>

      <p className="mt-6 text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
