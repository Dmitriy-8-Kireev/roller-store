const initialState = {
  scooters: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUESTED":
      return {
        books: [],
        loading: true,
        error: null
      };

    case "FETCH_DATA_ERROR":
      return {
        books: [],
        loading: true,
        error: action.payload
      };

    case "FETCH_DATA_LOADED":
      return {
        books: action.payload,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default reducer;
