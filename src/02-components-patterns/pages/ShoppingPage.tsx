import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/cusstom-styles.css';
import { products } from '../data/products';

const product = products[0];

//[key:string] x cantidad de llavez
export const ShoppingPage = () => {


  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
        <ProductCard
          key={product.id}
          product={product}
          className='bg-dark text-white'
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        >
          {
            ( {reset, increaseBy, maxCount, count, isMaxCountReached} ) => (
              <>
                <ProductImage className="custom-image"/>
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons"/>

                <button onClick={reset}>Reset</button>
                
                <button onClick={() => increaseBy(-2)}>-2</button>
                {
                  (!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button> )
                }
                <span>{count}</span>
              </>
            )
          }
        </ProductCard>
    </div>
  )
}
