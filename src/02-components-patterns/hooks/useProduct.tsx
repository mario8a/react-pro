import { useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interface';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({onChange, product}: useProductArgs) => {

  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {

    const newValue = Math.max(counter + value, 0)

    setCounter(newValue);
    // Si onChange tiene valor, ejecuta onChange()
    onChange && onChange({count: newValue, product});
  }


  return {
    counter,
    increaseBy
  }
}