import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import AddToCart from "./AddToCart";
import { CornerLeftUp } from "lucide-react";
import styles from './Product.module.css';

function Product() {
  const { name } = useParams();
  const dataURL = 'https://fakestoreapi.com/products/' + name;
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const addItemToCart = useOutletContext();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(dataURL);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const data = await response.json();
        setProductData(data);
      } catch(err) {
        setError(err);
        setProductData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProductData();
  }, [dataURL]);

  return (
    <>
      <Link to='/shop' className={styles.return}>
        <CornerLeftUp className={styles['icon-return']}/>
        Back
      </Link>
      {
        loading ? <p>Loading...</p> :
        productData && !error ? (
          <div className={styles.product}>
            <div className={styles['product-image']}>
              <img src={productData.image} alt="" />
            </div>
            <div className={styles["product-details"]}>
              <h1>{productData.title}</h1>
              <p>Rating: {productData.rating.rate} &#40;{productData.rating.count}&#41;</p>
              <p>{productData.description}</p>
              <p className={styles.price}>${productData.price}</p>
              <AddToCart 
                productId={productData.id}
                title={productData.title}
                price={productData.price}
                image={productData.image}
                addItemToCart={addItemToCart}
              />
            </div>
          </div>
        ) : <p>Something went wrong. Product doesn&apos;t exists.</p>
      }
    </>
  )
}

export default Product;