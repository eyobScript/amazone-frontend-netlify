import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./order.module.css";
import { db } from "../../Utility/firebase";
import { DataProvider } from "../../ContextProvider/ContextProvider";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataProvider);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // fetch orders from db
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot)
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && <div style={{padding: '20px'}}>You don't have orders yet.</div>}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, index) => {
              return (
                <div key={index}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => (
                    <ProductCard flex={true} product={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
