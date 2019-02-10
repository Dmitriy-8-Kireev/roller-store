import reducer, { initialState } from "../reducers";

describe("test reducer", () => {
  it("FETCH_DATA_REQUESTED after situation without error", () => {
    // it - блок, конкретного unit-теста
    const action = {
      type: "FETCH_DATA_REQUESTED"
    };

    expect(reducer(initialState, action)).toEqual({
      scooters: [],
      loading: true,
      error: null
    });
  });

  it("FETCH_DATA_REQUESTED after error", () => {
    const initialStateError = {
      scooters: [],
      loading: true,
      error: "OOps)"
    };
    // it - блок, конкретного unit-теста
    const action = {
      type: "FETCH_DATA_REQUESTED"
    };

    expect(reducer(initialStateError, action)).toEqual({
      scooters: [],
      loading: true,
      error: null
    });
  });

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

  it("FETCH_DATA_ERROR", () => {
    // it - блок, конкретного unit-теста
    const action = {
      type: "FETCH_DATA_ERROR"
    };

    expect(reducer(initialState, action)).toEqual({
      scooters: [],
      loading: true,
      error: action.payload
    });
  });
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
