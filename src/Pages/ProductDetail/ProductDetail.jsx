import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    useEffect(() => {
        setLoading(true);  
        axios.request(`${productUrl}/products/${productId}`)
        .then((response) => { 
            setProduct(response.data);
            setLoading(false); 
        }).catch((err) => {
            console.log(err);
            setLoading(false);  
        });
    }, []);
  return (
    <LayOut>
        {
            loading ? <Loader /> : 
            <ProductCard 
            product={product}
            flex ={true}
            renderDescription={true} 
            renderAdd={true}
            />
        }   
    </LayOut>
  )
}

export default ProductDetail
