import React, {useState} from "react";
import './Login.css';

const Login = () => {

    const [datos, setDatos] = useState({
      Email:'',
      Password: '',
    });

    const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
      })
    }
    const enviarDatos = (event) => {
      event.preventDefault();
    }
  return (
    /*
    <Form className="container-form" onSubmit={enviarDatos}>
        <h1 className="form-title"> Burguer Queen</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='Email' onChange={handleInputChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='Password' onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form> */
    <form className="container-form" onSubmit={enviarDatos}>
      <h1 className="form-title">
        Burguer Queen
      </h1>
      <div class="field">
        <label class="label">
          Email
        </label>
      <p className="control has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Email"  name='Email' onChange={handleInputChange}/>
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </p>
      </div>
      <div class="field">
        <label class="label">
          Password
        </label>
    <p className="control has-icons-left">
      <input className="input" type="password" placeholder="Password"  name='Password' onChange={handleInputChange}/>
      <span className="icon is-small is-left">
        <i className="fas fa-lock"></i>
      </span>
      </p>
      </div>
      <div class="field is-grouped">
    <div class="control">
    <button class="button is-link" type="submit">Sign In</button>
    </div>
    <div class="control">
    <button class="button is-link is-light" type="reset">Reset</button>
    </div>
    </div>
      
</form>
    
  )
}
export default Login