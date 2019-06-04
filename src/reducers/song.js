import { TOOGLE_SONG, fetchSong } from "../actions/song";
import { LOGOUT_USER } from "../actions/user";
const initialState = {
  playing: false
};

// Implementamos el reducer
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case String(fetchSong.fulfilled):
      return { ...payload, audio: { url: payload.audio }, playing: true };
    case TOOGLE_SONG:
      return { ...state, playing: payload };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export const getSong = state => state.song;
export const getSelectedSong = state => state.song.id;

export default reducer;
