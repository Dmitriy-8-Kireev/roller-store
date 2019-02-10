import { fetchApidata, dataRequested, dataError, dataLoaded } from "./index";

describe("test action-creators", () => {
  it("dataRequested()", () => {
    const expectedAction = {
      type: "FETCH_DATA_REQUESTED"
    };

    expect(dataRequested()).toEqual(expectedAction);
  });
});
