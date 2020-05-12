import axios ,{AxiosInstance} from 'axios';
 

   function axiosFactory  () : AxiosInstance  {
		let api = axios.create({
						baseURL: '/api/',
					});
		return api;
    }

export default axiosFactory;

