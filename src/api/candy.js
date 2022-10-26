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

export const candyIndex = ( user ) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/candies',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const candyShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/candies/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}

export const candyUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/candies/' + id,
		data: {
			candy: data,
		},
        headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const candyDelete = ( user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/candies/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}