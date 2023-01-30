import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
//import { useForm } from 'react-hook-form';

export function Login() {

  const link = useNavigate()

  const [input, setInput] = useState({
    email: "",
    password: "",
  })

  const valorInput = (e) => {
    setInput(
      {
        ...input,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.email || !input.password) {
      alert('Datos incompletos')
      return
    }

    fetch('http://localhost:3004/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input)
    })
      .then(res => res.ok ? res.json() : Promise.reject({ err: true }))
      .then(res => {
        if (!res.err) {
          link('/menu')
        }
        console.log(res);
      });

  }
  return (
    <section className="contenedor-principal">
      <div className="caja-formulario">
        <h1 className="inicio-sesion">SIGN IN</h1>
        <form className="formulario-login" onSubmit={handleSubmit} >
          <input type="text" placeholder=" User" className="input-login" onChange={valorInput}
            name='email'
            value={input.email}
          />

          <input type="password" placeholder="Password" className="input-password" onChange={valorInput}
            name='password'
            value={input.password}
          />
          <button className="btn-ingresar"> Login</button>
        </form>
      </div>
    </section>)
}
