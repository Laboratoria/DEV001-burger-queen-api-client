import { Link } from "react-router-dom";
//import { useNavigate } from 'react-router-dom'
//import { useForm } from 'react-hook-form';

export function Login() {
  
  //const navigate = useNavigate();

  // const onSubmit = (data, e) => {

  //   e.target.reset()

    fetch('http://localhost:3004/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: 'lore@gmail.com', password: 'Laboratoria123' })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  //}

    return (
      <section className="contenedor-principal">
        <div className="caja-formulario">
          <h1 className="inicio-sesion">SIGN IN</h1>
          <form className="formulario-login" >
            <input type="text" placeholder=" User" className="input-login"
              name='email'
            />

            <input type="password" placeholder="Password" className="input-password"
              name='password'
            />
            <Link to='/Menu'> <button className="btn-ingresar"> Login</button> </Link>
          </form>
        </div>
      </section>)
  }


