import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties
}

export const ProductImage = ({img, className, style}: Props) => {

  const { product } = useContext(ProductContext);
  let imgTOShow: string;

  if (img) {
    imgTOShow = img;
  } else if (product.img) {
    imgTOShow = product.img
  } else {
    imgTOShow = noImage;
  }

  return (
    <img className={`${styles.productImg} ${className}`} src={ imgTOShow } alt="Product img" style={style}/>
  )
}