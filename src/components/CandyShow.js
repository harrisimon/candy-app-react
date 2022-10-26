import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { candyShow, candyUpdate } from '../api/candy'




const CandyShow = ({ user, msgAlert }) => {
    //setting state
    const [candy, setCandy] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    
    //desctructuring id from params
    const { id } = useParams()

    // brackets for component did mount
    useEffect(() => {
        candyShow(user, id)
            .then((res) => {
                setCandy(res.data.candy)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Candy Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])


    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        setCandy({...candy, [event.target.name]: event.target.value})
    }

    const handleUpdateCandy = () => {
        candyUpdate(candy, user, id)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Candy Updated',
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
            <h3>Name: {candy.name}</h3>
            <p>Flavor: {candy.flavor}</p>
        </>
    )



}

export default CandyShow