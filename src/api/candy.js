import apiUrl from '../apiConfig'
import axios from 'axios'

export const candyCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/candies',
		data: {
			candy: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}