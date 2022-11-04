import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { candyDelete, candyShow, candyUpdate } from '../api/candy'
import CandyUpdate from './CandyUpdate'
import CandyDelete from './CandyDelete'




const CandyShow = ({ user, msgAlert }) => {
    //setting state
    const [candy, setCandy] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false)
    
    //desctructuring id from params
    const { id } = useParams()
    const navigate = useNavigate()

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
                toggleShowUpdate()
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

    const handleCandyDelete = () => {
        candyDelete(user, id)
            .then(() => {
                setDeleted(true)
                msgAlert({
                    heading: 'Success',
                    message: 'Candy Deleted',
                    variant: 'success'
                })
            })
            
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Deleting Candy Failure' + error,
                    variant: 'danger'
                })
            })
    }
    
    if(deleted) navigate('/candies')

    return (
        <div className='container-md'>
            <h3>Name: {candy.name}</h3>
            <p>Flavor: {candy.flavor}</p>
            <p>Calories: {candy.calories}</p>
            <button onClick={toggleShowUpdate} 
            style={isUpdateShown === true
                ? {display:  'none'} :
                 {display:  'visible'} 
            }>Update</button>
            {isUpdateShown && (
            <CandyUpdate candy={candy} handleChange={handleChange} handleUpdateCandy={handleUpdateCandy} />
            )}
            <CandyDelete handleCandyDelete={handleCandyDelete}/>
        </div>
    )



}

export default CandyShow