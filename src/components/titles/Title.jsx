import React from 'react'
import './Title.css'

export const Title = ({title='Profile'}) => {
  return (
    <h2 className='title__component'>{title}</h2>
  )
}

export default Title