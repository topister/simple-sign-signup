import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h2 className="mb-4">Sign In</h2>
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
      <button className="btn btn-primary w-50">Sign In</button>
      <p className="mt-4">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-primary">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
