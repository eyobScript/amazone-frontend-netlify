import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]); // Renamed to lowercase `products`
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To handle any error that occurs

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("https://fakestoreapi.com/products"); // Fetch data from API
        setProducts(response.data); // Store products in state
      } catch (err) {
        console.error("Error fetching products:", err); // Log error
        setError("Failed to fetch products. Please try again later."); // Set error state
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Loading state - show loader while fetching data
  if (loading) {
    return <Loader />;
  }

  // Error handling - show error message if there was an issue
  if (error) {
    return <div className={classes.error}>{error}</div>;
  }

  // Render products when data is fetched
  return (
    <section className={classes.products_container}>
      {products.map((product) => (
        <ProductCard key={product.id} renderAdd={true} product={product} />
      ))}
    </section>
  );
}

export default Product;
