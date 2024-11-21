import React, { useEffect, useState } from 'react'
import classes from './result.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../Components/Product/ProductCard';

function Results() {
  const { categoryName } = useParams();
  const [result, setResult] = useState([]);
  useEffect(() => {
  axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((response) => {
      setResult(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [ ]);
  
  return (
    <LayOut>
      <section>
        <h1 style={{padding: "30px"}}>Results</h1>
        <p style={{padding: "30px"}}>Category / {categoryName}</p>
        <hr />
        <div className={classes.product_container}>
          {
            result?.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />

            ))
          }
        </div>
      </section>
    </LayOut>
  )
}

export default Results
