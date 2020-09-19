import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID bibbHc31ybTtraWJ916i_8Vmkw6ni_HSiQIhOM1VYbw'
	}
});
