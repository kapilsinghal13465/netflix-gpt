import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='pr-4'>
      <img className='w-48' alt='movie' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard
