import { createAsyncAction } from "redux-promise-middleware-actions";

export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const fetchAlbums = createAsyncAction(FETCH_ALBUMS, async () => {
  const res = await fetch("/api/albums");
  return await res.json();
});
