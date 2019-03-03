import updateScooterList from "./scooter-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
  return {
    scooterList: updateScooterList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
