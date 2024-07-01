import axios from "axios";

const POKEMON_API = "https://pokeapi.co/api/v2";

export async function getRegions() {
  try {
    const response = await axios.get(`${POKEMON_API}/region?limit=4`);

    let regionsUrl = response.data.results.map((item) => item.url);

    const regionsPromises = regionsUrl.map((url) => axios.get(url).then((res) => res.data));
    const allRegions = await Promise.all(regionsPromises);

    return allRegions;
  } catch (error) {
    throw error(error);
  }
}
