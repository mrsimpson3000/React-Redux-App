import redux, { createStore } from "redux";

export const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
