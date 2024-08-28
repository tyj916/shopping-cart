import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const addItemToCart = useOutletContext();

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const productsData = await response.json();
        setProducts(productsData);
      } catch(err) {
        setError(err.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProductsData();
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <ul className="products">
        {
          loading ? <p>Loading...</p> :
          error ? <p>A network error was encountered</p> :
          products && products.length === 0 ? <p>No product.</p> :
          products && products.map(product => {
            return (
              <ProductCard 
                key={product.id}
                {...product}
                addItemToCart={addItemToCart}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default Shop;