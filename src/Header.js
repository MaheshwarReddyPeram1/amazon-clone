import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase'
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const authentication =()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__SearchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div onClick={authentication} className="header_option">
            <span className="header__optionLineone">{user ? user.email : "Hello Guest,"}</span>
            <span className="header__optionLinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header__optionLineone">Retruns</span>
          <span className="header__optionLinetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineone">Your</span>
          <span className="header__optionLinetwo">prime</span>
        </div>
        
          <div className="optionBasket">
          <Link to="/checkout">
            <ShoppingBasketIcon />
          </Link>
            <span
              className="header__optionLinetwo 
          header__baskecount"
            >
              {basket?.length}
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;
