import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h2 className="mb-4">Sign In</h2>
      <div className="w-50 mb-2">
        <label className="form-label">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control"
        />
      </div>
      <div className="w-50 mb-4">
        <label className="form-label">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="form-control"
        />
      </div>
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
