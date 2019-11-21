import axios from "axios";
import { API_KEY } from "./secret.config.js";
const url = "https://www.neowsapp.com/rest/v1/feed";

const getAsteroidData = async function(date) {
  let result;
  console.log(date);
  await axios
    .get(url, {
      params: {
        api_key: API_KEY,
        start_date: date,
        end_date: date,
        detailed: true
      }
    })
    .then(({ data }) => {
      result = Object.values(data.near_earth_objects)[0];
    });

  return result;
};

export default getAsteroidData;
