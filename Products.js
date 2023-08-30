import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Dummy_products=[
  {
  id: 'p1',
  price: 10,
  title: 'Body Scrub',
  description: 'An Exfolating Scrub'
  },
{
  id: 'p2',
  price: 4,
  title: 'FaceWash',
  description: 'A Mild Cleanser'
}]
const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_products.map((product)=>(
        <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
