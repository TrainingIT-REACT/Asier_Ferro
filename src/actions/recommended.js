import { createAsyncAction } from "redux-promise-middleware-actions";

export const FETCH_RECOMMENDED = "FETCH_RECOMMENDED";
export const fetchRecommended = createAsyncAction(
  FETCH_RECOMMENDED,
  async () => {
    const res = await fetch("/api/albums");
    const albums = await res.json();
    return albums.sort(() => Math.random() - 0.5).slice(0, 4);
  }
);
