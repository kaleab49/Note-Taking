import Form from "../components/Form";

function Register() {
  return (
    <>
      <Form route={"/api/user/register/"} method="register" />
      <div className="form-footer">
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </>
  );
}

export default Register;
