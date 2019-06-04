import { fetchAlbum } from "../actions/album";

const initialState = { data: [] };

// Implementamos el reducer
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case String(fetchAlbum.fulfilled):
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const getAlbum = state => state.album;

export default reducer;
