import React, {useContext} from 'react'
import Rating from "@mui/material/Rating"
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom';
import { DataProvider } from '../../ContextProvider/ContextProvider';
import { Type } from '../../Utility/action.type';

function ProductCard({product, flex,renderDescription, renderAdd}) {
    const {image, title, id, rating, price, description} = product;
    
    const [state, dispatch] = useContext(DataProvider);

function addToCart(){
      dispatch({
        type: Type.ADD_TO_CART,
        item: {image, title, id, rating, price, description}
      })
}


  return (
    <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDescription && <div style={{maxWidth: "750px"}}>{description}</div>}
        <div className={classes.rating}>
            {/* rating */}
            <Rating value={rating?.rate || 10} precision={0.1} readOnly />
            {/* count */}
            <small>{rating?.count}</small>
        </div>
        <div>
            {/* price */}
            <CurrencyFormat amount={price} />
        </div>
        {
         renderAdd && <button onClick={addToCart} className={classes.button}>add to cart</button>
        }
      </div>
    </div>
  )
}

export default ProductCard;
