import { useSignUpMutation } from "src/hooks/useSignUpMutation";
import SignUpForm from "src/widgets/forms/SignUpForm";

const Signup = () => {
  const queryMutation = useSignUpMutation();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <SignUpForm onSignUpSubmit={(data) => queryMutation.mutate(data)} />
      </div>
    </div>
  );
};

export default Signup;
