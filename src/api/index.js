import axios from "axios";

const { REACT_APP_X_RAPIDAPI_KEY, REACT_APP_X_RAPID_URL } = process.env;

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(`${REACT_APP_X_RAPID_URL}`, {
      method: "GET",
      url: `${REACT_APP_X_RAPID_URL}`,
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": `${REACT_APP_X_RAPIDAPI_KEY}`,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
