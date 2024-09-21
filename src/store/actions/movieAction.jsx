import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";

export { removemovie } from "../reducers/movieSlice";

export const getingMovieData = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/movie/${id}`);
    const watchPro = await axios(`/movie/${id}/watch/providers`);
    const video = await axios.get(`/movie/${id}/videos`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const recomendation = await axios.get(`/movie/${id}/recommendations`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const translations = await axios.get(`/movie/${id}/translations`);
    let theWholeData = {
      details: details.data,
      watchPro: watchPro.data.results.IN,
      video: video.data.results.find((m) => m.type === "Trailer"),
      similar: similar.data.results,
      externalid: externalid.data,
      recomendation: recomendation.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
    };

    dispatch(loadmovie(theWholeData));
  } catch (error) {
    console.error(error);
  }
};
