import axios from 'axios';

const api = axios.create({
	baseURL: 'http://192.168.200.67:2999/api',
});

export default api;