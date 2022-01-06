import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

import "../styles/styles.css";

export const FormikComponents = () => {
  
  return (
    <div>
      <h1>Fomkik Components</h1>

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
              <label htmlFor="firstName">First name</label>
              <Field name="firstName" type="text"/>
              <ErrorMessage name="firstName" component="span"/>
      
              <label htmlFor="lastName">last name</label>
              <Field name="lastName" type="text"/>
              <ErrorMessage name="lastName" component="span"/>
      
              <label htmlFor="email">Email</label>
              <Field name="email" type="text"/>
              <ErrorMessage name="email" component="span"/>

              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senoir">IT Senior</option>
                <option value="it-jr">IT Junior</option>
              </Field>
              <ErrorMessage name="jobType" component="span"/>

              
              <label>
                <Field name="terms" type="checkbox"/>
                Terminos y condiciones
              </label>
              <ErrorMessage name="terms" component="span"/>
      
              <button type="submit">Submit</button>
            </Form>
          )
        }

      </Formik>
    </div>
  );
};
