import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Ваш заказ</h2>
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

        <tbody>
          <tr>
            <td>1</td>
            <td>Самокат HELLO WOOD HW Micron XL-1</td>
            <td>1</td>
            <td>3910 руб.</td>
            <td>
              <button className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
              </button>
              <button className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">Всего: 3910 ₽</div>
    </div>
  );
};

export default ShoppingCartTable;
