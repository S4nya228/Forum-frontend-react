import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://ec2-51-20-87-96.eu-north-1.compute.amazonaws.com/',
})

export default axiosInstance
