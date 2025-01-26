import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<T[]>(this.endpoint)
      .then(res => res.data);
  }

  post = (entity: T) => {
    return axiosInstance
      .post<T>(this.endpoint, entity)
      .then(res => res.data)
  }
}

export default APIClient;
