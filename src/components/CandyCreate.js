import React, { useState } from 'react' 
import { candyCreate } from '../api/candy'

const CandyCreate = ({ user, msgAlert }) => {

    const defaultCandy = {
        name: '',
        flavor: ''
    }

    const [candy, setPet] = useState(defaultCandy)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        setPet({...candy, [event.target.name]: event.target.value})
    }

    const handleCreateCandy = () => {
        candyCreate(candy, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Candy',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Candy Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
			<>
				<input
					type='text'
					value={candy.name}
					name='name'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={candy.flavor}
					name='flavor'
					onChange={handleChange}
				/>
				<button onClick={handleCreateCandy}>Create Candy</button>
			</>
		)
}

export default CandyCreate