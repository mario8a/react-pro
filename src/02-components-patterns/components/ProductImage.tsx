import { useContext } from "react";
import { ProductContext } from './ProductCard';
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({img = ''}) => {

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
    <img className={styles.productImg} src={ imgTOShow } alt="Product img" />
  )
}