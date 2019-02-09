const initialState = {
  scooters: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUESTED":
      return {
        scooters: [],
        loading: true,
        error: null
      };

    case "FETCH_DATA_ERROR":
      return {
        scooters: [],
        loading: true,
        error: action.payload
      };

    case "FETCH_DATA_LOADED":
      return {
        scooters: action.payload,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default reducer;
