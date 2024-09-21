import { loadtv } from "../reducers/tvSlice";
import axios from "../../utils/axios";
export { removetv } from "../reducers/tvSlice";

export const getingTvData = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/tv/${id}`);
    const watchPro = await axios(`/tv/${id}/watch/providers`);
    const video = await axios.get(`/tv/${id}/videos`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const recomendation = await axios.get(`/tv/${id}/recommendations`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const translations = await axios.get(`/tv/${id}/translations`);
    let theWholeData = {
      details: details.data,
      watchPro: watchPro.data.results.IN,
      video: video.data.results.find((m) => m.type === "Trailer"),
      similar: similar.data.results,
      externalid: externalid.data,
      recomendation: recomendation.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
    };

    dispatch(loadtv(theWholeData));
  } catch (error) {
    console.error(error);
  }
};
