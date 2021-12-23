import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/cusstom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title={'Cafe'} />
          <ProductCard.Buttons/>
        </ProductCard>

        <ProductCard
          product={product}
          className='bg-dark text-white'
        >
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons"/>
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: 'green',
            color: 'white'
          }}
        >
          <ProductImage/>
          <ProductTitle />
          <ProductButtons/>
        </ProductCard>
      </div>
    </div>
  )
}
