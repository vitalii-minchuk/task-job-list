import axios from 'axios';
import { JobType } from '../types';

const baseUrl = import.meta.env.VITE_BASE_URL as string;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
const getData = async () => {
  const response = await axios.get<JobType[]>(baseUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default getData;
