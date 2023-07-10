import React from 'react'
import './socialMedia.scss'

export const SocialMedia = ({socialMedia}) => {
  return socialMedia.map(({src, link}) => {
    return(
        <a href={link}><img className='social_media_img' src={src} alt="social"></img></a>
    )
  })
}
