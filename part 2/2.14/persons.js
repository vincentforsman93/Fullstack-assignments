import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const create = async (newPerson) => {
  const res = await axios.post(baseUrl, newPerson);
  return res.data; 
};

export default { getAll, create };
