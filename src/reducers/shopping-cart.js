const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (scooter, item = {}, quantity) => {
  const { id = scooter.id, count = 0, title = scooter.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * scooter.price
  };
};

const updateOrder = (state, scooterId, quantity) => {
  const {
    scooterList: { scooters },
    shoppingCart: { cartItems }
  } = state;

  const scooter = scooters.find(({ id }) => id === scooterId);
  const itemIndex = cartItems.findIndex(({ id }) => id === scooterId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(scooter, item, quantity);
  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  }

  switch (action.type) {
    case "SCOOTER_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "SCOOTER_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_SCOOTERS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
