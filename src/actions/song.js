import { createAsyncAction } from "redux-promise-middleware-actions";

export const TOOGLE_SONG = "TOOGLE_SONG";
export const toogleSong = val => ({
  type: TOOGLE_SONG,
  payload: val
});

export const FETCH_SONG = "FETCH_SONG";
export const fetchSong = createAsyncAction(FETCH_SONG, async (id, album) => {
  const song = await fetch(`/api/songs?id=${id}`).then(res => res.json());
  return { ...album, ...song[0] };
});
