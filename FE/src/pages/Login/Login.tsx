import LoginForm from "src/widgets/forms/LoginForm";
import { useLoginMutation } from "../../hooks/useLoginMutation";

const Login = () => {
  const queryMutation = useLoginMutation();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <LoginForm onLoginSubmit={(data) => queryMutation.mutate(data)} />
      </div>
    </div>
  );
};

export default Login;
