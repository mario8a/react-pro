import { FormEvent } from 'react';
import { useForm } from '../hooks/useFom';

import '../styles/styles.css';

export const RegisterPage = () => {

  const {
    onChange, formData, resetForm, isValidEmail,
    name, email, password1, password2
  } = useForm({
      name: '',
      email: '',
      password1: '',
      password2: '',
    }
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Register page</h1>

      <form noValidate onSubmit={(ev) => onSubmit(ev)}>
        <input 
          type="text"
          placeholder="Name"
          value={name}
          name='name'
          onChange={onChange}
          className={`${ name.trim().length <= 0 && 'has-error'}`}
        />
        { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }
        <input 
          type="email"
          placeholder="Email"
          value={email}
          name='email'
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>Email invalido</span> }

        <input 
          type="password"
          placeholder="password"
          value={password1}
          name='password1'
          onChange={onChange}
        />
        { password1.trim().length <= 0 && <span>Este campo es obligatorio</span> }
        { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener 6 caracteres</span> }

        <input 
          type="password"
          placeholder="Repeat password"
          value={password2}
          name='password2'
          onChange={onChange}
        />
        { password2.trim().length <= 0 && <span>Este campo es obligatorio</span> }
        { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span> }

        <button type="submit">Create</button>
        <button type='button' onClick={resetForm}>Reset</button>
      </form>      
    </div>
  )
}
