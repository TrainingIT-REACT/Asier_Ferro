import { createAsyncAction } from "redux-promise-middleware-actions";

export const FETCH_ALBUM = "FETCH_ALBUM";
export const fetchAlbum = createAsyncAction(FETCH_ALBUM, async id => {
  const song = await fetch(`/api/songs?album_id=${id}`).then(res => res.json());
  const album = await fetch(`/api/albums?id=${id}`).then(res => res.json());
  return { ...album[0], ...{ data: song } };
});
