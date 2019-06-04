import { fetchAlbums } from "../actions/albums";

const initialState = [];

// Implementamos el reducer
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case String(fetchAlbums.fulfilled):
      return payload;
    default:
      return state;
  }
};

export const getAlbums = state => state.albums;

export default reducer;
