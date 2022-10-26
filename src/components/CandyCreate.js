import React, { useState } from 'react' 
import { candyCreate } from '../api/candy'
import { useParms, useNavigate} from 'react-router-dom'

const CandyCreate = ({ user, msgAlert }) => {

    const defaultCandy = {
        name: '',
        flavor: ''
    }
    
    const [created, setCreated] = useState(false)
    const [candy, setCandy] = useState(defaultCandy)
    const navigate = useNavigate()
    
    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        setCandy({...candy, [event.target.name]: event.target.value})
    }

    const handleCreateCandy = () => {
        candyCreate(candy, user)
        .then(() => {
            setCreated(true)
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
    if(created) navigate('/candies')

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