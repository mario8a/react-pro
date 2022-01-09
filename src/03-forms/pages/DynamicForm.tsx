import { Formik, Form } from 'formik';
import formJSON from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components';
import * as Yup from 'yup';

const initialValues: {[x: string]: any} = {};
const requiredFields: {[x: string]: any} = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido')
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2 ,`Minimo de ${(rule as any).value || 2} caracteres`)
    }

    if (rule.type === 'email') {
      schema = schema.email('Email invalido');
    }

    // .. otras reglas
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields})


export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {(formik) => (
          <Form>
            {formJSON.map(({type, name, placeholder, label, options})  => {

              if (type === 'input' || type === 'password' || type === 'email') {
                return <MyTextInput
                        key={name}
                        type={type as any}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                       />
              } else if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select and option</option>
                    {
                      options?.map(({label, id}) => (
                        <option key={id} value={id}> {label} </option>
                      ))
                    }
                     
                  </MySelect>
                )
              }

              return <span>Type: {type} no es soportado</span>

              
            })}
  
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
