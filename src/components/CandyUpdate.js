import React from 'react'

const CandyUpdate = ({ candy, handleChange, handleUpdateCandy }) => {
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
                    <button onClick={handleUpdatePet}>Update Candy</button>
        
        </>
    )
}

export default CandyUpdate