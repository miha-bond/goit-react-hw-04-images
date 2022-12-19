import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const params = {
  key: '30550641-0f108504ecdb994905cf7394f',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
  isImageModalOpen: false,
};

export const pixadayApi = async (query, page) => {
  const { data } = await axios.get(`/?q=${query}&page=${page}`, { params });
  return data;
};
