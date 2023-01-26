import { Link } from "react-router-dom";

export function Login() {
  return (
    <section className="contenedor-principal">
      <div className="caja-formulario">
        <h1 className="inicio-sesion">SIGN IN</h1>
        <form className="formulario-login">
          <input type="text" placeholder=" User" className="input-login" />
          <input type="password" placeholder="Password" className="input-password" />
          <Link to='/Menu'> <button className="btn-ingresar"> Login</button> </Link>
        </form>
      </div>
    </section>)
}

