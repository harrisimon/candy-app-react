import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { candyIndex } from '../api/candy'
import { Link } from 'react-router-dom'

const CandyIndex = ({ user, msgAlert }) => {
    const [allCandies, setAllCandies] = useState([])

    const { id } = useParams()

    useEffect(() => {
        candyIndex(user)
            .then((res) => {
                console.log(res)
                setAllCandies(res.data.candies)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Candy Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    const allCandiesJSX = allCandies.map(candy => {
        return (
            <Link key={candy._id} to={candy._id}>
            <li>
                Name: {candy.name} flavor: {candy.type}
            </li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allCandiesJSX}</ul>
        </>
    )
    

}

export default CandyIndex