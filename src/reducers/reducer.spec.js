import reducer, { initialState } from "../reducers";

describe("test reducer", () => {
  //  test - группировка для наших тестов новостного редьюсера

  it("FETCH_DATA_LOADED", () => {
    // it - блок, конкретного unit-теста
    const action = {
      type: "FETCH_DATA_LOADED"
    };

    expect(reducer(initialState, action)).toEqual({
      scooters: action.payload,
      loading: false,
      error: null
    });
  });
});
