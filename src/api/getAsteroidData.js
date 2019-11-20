import axios from "axios";
import { API_KEY } from "./secret.config.js";
const url = "http://www.neowsapp.com/rest/v1/feed";

const getAsteroidData = async function(date) {
  let result;
  await axios
    .get(url, {
      params: {
        api_key: API_KEY,
        start_date: "2019-11-17",
        end_date: "2019-11-17",
        detailed: true
      }
    })
    .then(({ data }) => {
      console.log(Object.values(data.near_earth_objects)[0]);
      result = Object.values(data.near_earth_objects)[0];
    });

  return result;
};

export default getAsteroidData;
