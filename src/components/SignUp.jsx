import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h2 className="mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="form-control mb-2 w-50"
      />
      <input
        type="email"
        placeholder="Email"
        className="form-control mb-2 w-50"
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control mb-4 w-50"
      />
      <button className="btn btn-success w-50">Sign Up</button>
      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/signin" className="text-primary">
          Sign In
        </Link>
      </p>
    </div>
  );
}
