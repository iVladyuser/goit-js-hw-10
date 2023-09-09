import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_tykwXtjVO7B4PZO2ZOeOrrymEnGkGRbyDKSNUnmv2sgYApBfBHJYWLtwuNgLmOAi';

export async function fetchBreeds() {

  const response = await axios.get('/breeds');

  return response.data;
  //   return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   });
}

export async function fetchCatByBreed(breedId) {

  const response = await axios.get(`/images/search?breed_ids=${breedId}`);

  return response.data;
  //   return fetch(
  //     `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  //   ).then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   });
}

