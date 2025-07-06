import { useForm } from "react-hook-form";
import BlueButton from "../BlueButton";

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSignUpSubmit: (data: LoginFormValues) => void;
}

const loginFormDefaultValues = {
  email: "",
  password: "",
};

const SignUpForm = ({ onSignUpSubmit }: LoginFormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: loginFormDefaultValues,
  });

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create an Account
      </h2>
      <form
        className="space-y-5"
        onSubmit={handleSubmit((data) => {
          onSignUpSubmit(data);
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

        <BlueButton>Create account</BlueButton>
      </form>
    </div>
  );
};

export default SignUpForm;
