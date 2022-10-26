import React from 'react'

const CandyDelete = ({ handleCandyDelete }) => {
    return(
        <>
            <button onClick={handleCandyDelete}>
                Delete
            </button>
        </>
    )
}

export default CandyDelete