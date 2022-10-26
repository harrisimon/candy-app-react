import React from 'react'
import { Navigate } from 'react-router-dom'


const Home = (props) => {
	const { user } = props
	if (user) {
		return(
			<Navigate to='/candies' />
		)
	}
	return (
		<div className='container-md'>
			<h2>🍬Candy Emporium🍬</h2>
			<p>Sign in to view and add to all the candies 🍬</p>
		</div>
	)
}

export default Home