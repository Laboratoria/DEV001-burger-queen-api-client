import "./Login.css";

import PrivateRoute from "../../components/router/PrivateRoute";
import { useAuthContext } from "../../Context/authContext";
import { useState } from "react";

const { isAuthenticated, loading } = useAuthContext;

const Login = () => {
  const { peticion } = useAuthContext();
  const [form, setForm] = useState("");
  const [viewpass, setViewpass] = useState("password");
  const handleViewpass = () => {
    setViewpass("text");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    peticion(form.email, form.password);
  };

  return (
    <section className="container">
      <form className="box" onSubmit={handleSubmit}>
        <h1 className="title ">Login</h1>
        <div className="field">
          <label className="label">Email</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              is-medium
              placeholder="Email"
              name="email"
              autoComplete
              onChange={handleChange}
              value={form.email}
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type={viewpass}
              placeholder="Password"
              name="password"
              autoComplete
              onChange={handleChange}
              value={form.password}
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
            <button
              className="button icon is-small is-right"
              onClick={handleViewpass}
            >
              <i className="fas fa-eye"></i>
            </button>
          </p>
        </div>
        <div className="btn-control">
          <input className="button is-large" type="submit" value="Sign In" />
        </div>
      </form>

      {isAuthenticated && <PrivateRoute />}
    </section>
  );
};
export default Login;
