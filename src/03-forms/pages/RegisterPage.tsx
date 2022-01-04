import { FormEvent } from 'react';
import { useForm } from '../hooks/useFom';

import '../styles/styles.css';

export const RegisterPage = () => {

  const {
    onChange, formData,
    name, email, password1, password2
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

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
        />
        <input 
          type="email"
          placeholder="Email"
          value={email}
          name='email'
          onChange={onChange}
        />
        <input 
          type="password"
          placeholder="password"
          value={password1}
          name='password1'
          onChange={onChange}
        />
        <input 
          type="password"
          placeholder="Repeat password"
          value={password2}
          name='password2'
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>      
    </div>
  )
}
