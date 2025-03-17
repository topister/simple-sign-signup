import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h2 className="mb-4">Sign Up</h2>
      <div className="w-50 mb-2">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="form-control"
        />
      </div>
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
