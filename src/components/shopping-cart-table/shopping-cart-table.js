import React from "react";
import { connect } from "react-redux";
import {
  scooterAddedToCart,
  scooterRemovedFromCart,
  allScootersRemovedFromCart
} from "../../actions";
import "./shopping-cart-table.css";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  const newTotal = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.total;
  }, 0);
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}руб.</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2 className="cart-table-headline">Ваш заказ</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Товар</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Акция</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Всего: {newTotal} ₽</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onIncrease: scooterAddedToCart,
  onDecrease: scooterRemovedFromCart,
  onDelete: allScootersRemovedFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
