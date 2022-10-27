import React from 'react'

const CandyUpdate = ({ candy, handleChange, handleUpdateCandy }) => {
    return (
        <>
            <form>
            <input
                type='text'
                value={candy.name}
                name='name'
                onChange={handleChange}
                placeholder='name of candy'
            />
            <input
                type='text'
                value={candy.flavor}
                name='flavor'
                onChange={handleChange}
                placeholder='flavor'
            />
            <label for='calories'>Calories</label>
            <input
                type='number'
                placeholder='100'
                value={candy.calories}
                name='calories'
                min='100'
                max='1000'
                onChange={handleChange}
            />
            </form>
            <button onClick={handleUpdateCandy}>Update Candy</button>
        
        </>
    )
}

export default CandyUpdate