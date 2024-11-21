import React from "react";
import classes from "./cart.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";
import { DataProvider } from "../../ContextProvider/ContextProvider";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket }, dispatch] = React.useContext(DataProvider);
  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  // Increase item amount in the cart
  function increase(item) {
    dispatch({
      type: Type.ADD_TO_CART,
      item,
    });
  }

  // Decrease item amount in the cart
  function decrease(id) {
    dispatch({
      type: Type.REMOVE_FROM_CART,
      id,
    });
  }

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h1>Hello there</h1>
          <h3>Your shopping basket </h3>
          <hr />
          {basket?.length === 0 ? (
            <h1>Oops! No items in your basket</h1>
          ) : (
            basket?.map((item) => (
              <section className={classes.cart_product} key={item.id}>
                {" "}
                {/* Use item.id as the unique key */}
                <ProductCard
                  product={item}
                  renderDescription={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increase(item)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  {item.amount}
                  <button
                    className={classes.btn}
                    onClick={() => decrease(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
