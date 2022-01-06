import { Formik, Form } from "formik";
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components/index';

import "../styles/styles.css";

export const FormikAbstract = () => {
  
  return (
    <div>
      <h1>Fomkik Abstract</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string().email("Email invalido").required("Es requerido"),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar los terminos y condiciones'),
          jobType: Yup.string()
                      .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                      .required('Requerido')
        })}
      >

        {
          (formik) => (
            <Form>
              <MyTextInput 
                label="First Name" 
                name="firstName"
                placeholder="Mario"
              />

              <MyTextInput 
                label="Last Name" 
                name="lastName"
                placeholder="Ochoa"
              />

              <MyTextInput 
                label="Email Address" 
                name="email"
                placeholder="mario@mario.com"
                type="email"
              />

              <MySelect label="Job Type" name="jobType">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senoir">IT Senior</option>
                <option value="it-jr">IT Junior</option>
              </MySelect>

              <MyCheckbox label="Terms and conditions" name="terms" />
      
              <button type="submit">Submit</button>
            </Form>
          )
        }

      </Formik>
    </div>
  );
};
