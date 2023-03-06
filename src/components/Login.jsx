// import { Link } from "react-router-dom";
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './UseAuth'

// import { useForm } from 'react-hook-form';

export function Login () {
  const link = useNavigate()

  const { login } = useAuth()

  const [input, setInput] = useState({
    email: '',
    password: ''
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
      alert('Por favor ingresa todos los datos')
      return
    }

    fetch('http://localhost:3004/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
      .then(res => res.ok ? res.json() : Promise.reject({ err: true }))
      .then(res => {
        const user = window.localStorage.setItem('user', JSON.stringify(res))

        login(user)
        if (!res.err) {
          link('/menu')
        }
        console.log(res)
      })
      .catch((err) => {
        alert('Datos inválidos')
      })
  }
  return (
    <section className='contenedor-principal'>
      <div className='caja-formulario'>
        <h1 className='inicio-sesion'>SIGN IN</h1>
        <form className='formulario-login' onSubmit={handleSubmit}>
          <input
            type='text' placeholder=' User' className='input-login' onChange={valorInput}
            name='email'
            value={input.email}
          />

          <input
            type='password' placeholder='Password' className='input-password' onChange={valorInput}
            name='password'
            value={input.password}
          />
          <button className='btn-ingresar'> Login</button>
        </form>
      </div>
    </section>
  )
}
