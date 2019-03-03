import React from "react";
import "./scooters-list-item.css";

const ScooterListItem = ({ scooter, onAddedToCart }) => {
  const {
    title,
    specifications,
    wheeldiameter,
    weight,
    price,
    coverImage
  } = scooter;
  return (
    <div className="scooter-list-item">
      <div className="scooter-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="scooter-details">
        <span href="#" className="scooter-title">
          {title}
        </span>
        <div className="scooter-author">{specifications}</div>
        <div className="scooter-author">{wheeldiameter}</div>
        <div className="scooter-author">{weight}</div>
        <div className="scooter-price">{price} руб.</div>
        <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ScooterListItem;
