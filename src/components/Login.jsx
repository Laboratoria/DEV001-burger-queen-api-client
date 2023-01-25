export function Login() {
  return( 
    <section className="contenedor-principal">
   <h1 className="inicio-sesion">INICIO DE SESION</h1>
        <form className="formulario-login">
          <input type="text" placeholder=" Usuario" />
          <input type="text" placeholder="Contraseña" />
          <button className="btn-ingresar"> Login</button>
        </form>
    </section> )
}

