const updateScooterList = (state, action) => {
  if (state === undefined) {
    return { scooters: [], loading: true, error: null };
  }

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
      return state.scooterList;
  }
};

export default updateScooterList;
