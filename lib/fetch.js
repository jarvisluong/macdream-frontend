import axios from 'axios';

export const fetch = key => axios.get(key).then(({ data }) => data);