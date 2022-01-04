import { useState, ChangeEvent } from 'react';

//T -> depende el tipo de dato que recibo es el tipo de dato
export const useForm = <T>(initState: T) => {

  const [formData, setFormData] = useState(initState);



  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ 
      ...prev,
      [event.target.name]: event.target.value 
    }));
  }

  return {
    ...formData,
    //Props
    formData,
    //Methods
    onChange
  }
}