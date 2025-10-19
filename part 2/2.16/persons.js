import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => (await axios.get(baseUrl)).data;
const create = async (newPerson) => (await axios.post(baseUrl, newPerson)).data;
const remove = async (id) => (await axios.delete(`${baseUrl}/${id}`)).data;
const update = async (id, changed) =>
  (await axios.put(`${baseUrl}/${id}`, changed)).data; 

export default { getAll, create, remove, update };
