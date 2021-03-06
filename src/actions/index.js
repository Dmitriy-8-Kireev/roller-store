const dataRequested = () => {
  return {
    type: "FETCH_DATA_REQUESTED"
  };
};

const dataError = error => {
  return {
    type: "FETCH_DATA_ERROR",
    payload: error
  };
};

const dataLoaded = data => {
  return {
    type: "FETCH_DATA_LOADED",
    payload: data
  };
};

export const scooterAddedToCart = scooterId => {
  return {
    type: "SCOOTER_ADDED_TO_CART",
    payload: scooterId
  };
};

export const scooterRemovedFromCart = scooterId => {
  return {
    type: "SCOOTER_REMOVED_FROM_CART",
    payload: scooterId
  };
};

export const allScootersRemovedFromCart = scooterId => {
  return {
    type: "ALL_SCOOTERS_REMOVED_FROM_CART",
    payload: scooterId
  };
};

const fetchApidata = (datastoreService, dispatch) => () => {
  dispatch(dataRequested());
  datastoreService
    .getData()
    .then(data => dispatch(dataLoaded(data)))
    .catch(err => dispatch(dataError(err)));
};
//fetchApidata ф-ия, которая возвращает функцию
//const fetchApidata = (dispatch, datastoreService) =>()
//внешняя ф-ия для работы в mapDispatchToProps
// внутр-яя ф-ия для компонента
export { fetchApidata };
