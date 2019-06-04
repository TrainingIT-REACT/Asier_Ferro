import { fetchRecommended } from "../actions/recommended";

const initialState = [];

// Implementamos el reducer
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case String(fetchRecommended.fulfilled):
      return payload;
    default:
      return state;
  }
};

export const getRecommended = state => state.recommended;

export default reducer;
