import React from 'react'
import fiveStars from './images/FiveStars.svg'
import './Reviews.scss'

export const Reviews = ({reviews}) => {
    return reviews.map(({text, title})=> {
        return (     
            <div className='text_block'>
                <span className='text_block_title'>{title}</span>
                <p className='text_block_paragraph'>{text}</p>
                <img className='stars' src={fiveStars} alt='five stars'/>
            </div>
        )
    })

}

