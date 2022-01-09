
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {


  return (
    <div>
      <h1>Register Formik page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values => {
          console.log(values);
          
        })}
        validationSchema={
          Yup.object({
            name: Yup.string().min(3, 'El nombre debe ser de 3 caracteres o mas').max(15, 'El nombre debe ser menor a 15 letras').required('Requerido'),
            email: Yup.string().email('Revise el formato del correo').required('Requerido'),
            password1: Yup.string().min(6, 'Min 6 letras').required('Requerido'),
            password2: Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales').required('Requerido')
          })
        }
      >
        
        {
          ({handleReset}) => (
             <Form>
               <MyTextInput label='Nombre' name='name' placeholder='Nombre' />
               <MyTextInput label='Email' name='email' type='email' placeholder='demo@demo.com' />
               <MyTextInput label='Password' name='password1' type='password'/>
               <MyTextInput label='Password2' name='password2' type='password'/>

               <button type="submit">Create</button>
               <button type='button' onClick={handleReset}>Reset</button>  
             </Form>
          )
        }


      </Formik>
    </div>
  )
}
