import React from 'react'


const ALT_IMG = 'https://mfiles.alphacoders.com/997/997814.jpg'

const MovieCard = ({movie}) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster != 'N/A' ? movie.Poster : ALT_IMG} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard