import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import classes from "./header.module.css"
import LowerHeader from './LowerHeader';
import { DataProvider } from '../../ContextProvider/ContextProvider';
import { auth } from '../../Utility/firebase';



function Header() {

    const [{basket, user}] = useContext(DataProvider);
    const totalItems = basket?.reduce((amount, item) => {
        return amount + item.amount;
    }, 0);

  return (
    <section className={classes.fixed}>
    <section>
        <div className={classes.header_container}>
                {/* logo */}
                <div className={classes.logo_container}>
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />                
               </Link>
                  <div className={classes.delivery}>          
               {/* delivery */}
                <span>
                    {/* icon */}
                    <IoLocationOutline />
                </span>
                <div>
                    <p>Delivery to</p>
                    <span>Ethiopia</span>
                </div>
                </div>
            </div> 
            {/* search section*/}
            <div className={classes.search}>
                <select name="" id="">
                    <option value="">All</option>
                </select>
                {/* search bar */}
                <input type="text" name='' id='' placeholder='Search Amazon'/>
                {/* search icon */}
                <IoSearch size={39}/>
            </div>
            <div className={classes.order_container}>
                {/* right side links */}
                <Link to='' className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="United state flag" />
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                </Link>
                {/* three components */}
                <Link to={!user && "/Auth"}>
                <div>
                    {
                        user? (
                            <>
                                <p>Hello {user?.email?.split('@')[0]}</p>
                                <span onClick={() => auth.signOut()}>Sign Out</span>
                            </>
                        ) : (
                            <>
                                <p>Hello, Sign In</p>
                                <span>Account & List</span>
                            </>
                        )
                    }
                </div>
                </Link>
                {/* orders */}
                <Link to="/orders">
                    <p>Return</p>
                    <span>& Orders</span>
                </Link>
                {/* cart */}
                <Link to='/cart' className={classes.cart}>
                    {/* icon */}
                    <BsCart2 size={35}/>
                    <span>{totalItems}</span>
                </Link>
            </div>
        </div>
    </section>
    <LowerHeader />
    </section>
  )
}

export default Header;
