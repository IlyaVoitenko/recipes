import axios from "axios";
const {
  REACT_APP_LIST_SIMILARITIES,
  REACT_APP_AUTHOR_ID,
  REACT_APP_ID,
  REACT_APP_RAPID_API_KEY,
  REACT_APP_RAPID_API_HOST,
  REACT_APP_API_FEED_TYPE,
} = process.env;

export const getListRecipes = async () => {
  const config = {
    method: "GET",
    url: REACT_APP_LIST_SIMILARITIES,
    params: {
      limit: "18",
      start: "0",
      id: REACT_APP_ID,
      apiFeedType: REACT_APP_API_FEED_TYPE,
      authorId: REACT_APP_AUTHOR_ID,
    },
    headers: {
      "X-RapidAPI-Key": REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": REACT_APP_RAPID_API_HOST,
    },
  };
  const { data } = await axios.request(config);
  return data;
};
