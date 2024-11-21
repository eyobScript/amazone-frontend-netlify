import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./Signup.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataProvider } from "../../ContextProvider/ContextProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataProvider);
  const navigate = useNavigate();
  const navStateData = useLocation();

  async function authHandler(e) {
    e.preventDefault();
    try {
      if (e.target.name === "signin") {
        setLoading({ ...loading, signIn: true });
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({
          type: Type.SET_USER,
          user: userCredential.user,
        });
        setLoading({ ...loading, signIn: false });
        navigate(navStateData?.state?.redirect || "/");
      } else {
        setLoading({ ...loading, signUp: true });
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({
          type: Type.SET_USER,
          user: userCredential.user,
        });
        setLoading({ ...loading, signUp: false });
        navigate(navStateData?.state?.redirect || "/");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small className={classes.small_popUp}>
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
              <ClipLoader size={20} color="#123abc" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please See Our Privacy Notice, our Cookies Noting and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader size={20} color="#123abc" />
          ) : (
            "Create Account"
          )}
        </button>
        {error && (
          <small style={{ marginTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
