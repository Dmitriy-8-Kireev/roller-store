import React from "react";
import { Link } from "react-router-dom";
import "./shop-header.css";
import { connect } from "react-redux";

const ShopHeader = ({ items, numItems, total }) => {
  const newCount = items.reduce((acc, curentvalue) => {
    return acc + curentvalue.count;
  }, 0);
  const newTotal = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.total;
  }, 0);
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark" href="#">
          RollerStore
        </div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {newCount} шт. (₽ {newTotal})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

export default connect(mapStateToProps)(ShopHeader);
