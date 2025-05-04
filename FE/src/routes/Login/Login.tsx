import { useLoginMutation } from "../../hooks/useLoginMutation";

const Login = () => {
  const queryMutation = useLoginMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    if (!email || !password) {
      return;
    }
    queryMutation.mutate({ email: `${email}`, password: `${password}` });
  };
  return (
    <div>
      Login
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="string" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
