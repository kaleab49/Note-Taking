import Form from "../components/Form";

function Login() {
  return (
    <>
      <Form route={"/api/token/"} method="login" />;
      <div className="form-footer">
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </>
  );
}

export default Login;
