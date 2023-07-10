import React from 'react'
import header from './images/Union.svg'
import bottomWave from './images/UnionBottom.svg'
import anyMoving from './images/AnyMoving.svg'
import anyMovingTwo from './images/AnyMoving2.svg'
import facebook from './images/Facebook.svg'
import instagram from './images/Instagram.svg'
import twitter from './images/Twitter.svg'
import handyman from './images/Handyman.svg'
import cleaning from './images/Cleaning.svg'
import lawncare from './images/Lawncare.svg'
import movers from './images/Movers.svg'
import trashHauling from './images/Trash Hauling.svg'
import bikeRepair from './images/Bike_repair.svg'
import plumber from './images/Plumbers.svg'
import moreMoving from './images/5edb7b2cb6d5b4edb4517d620a642c8b.svg'
import { Card } from './Card'
import { SocialMedia } from './SocialMedia'
import { Reviews } from './reviews'

const cards = [
{
    src: handyman,
    text: 'handyman'
},
{
    src: plumber,
    text: 'plumber'
},
{
    src: bikeRepair,
    text: 'bikeRepair'
},
{
    src: cleaning,
    text: 'cleaning'
},
{
    src: movers,
    text: 'movers'
},
{
    src: lawncare,
    text: 'lawncare'
},
{
    src: trashHauling,
    text: 'trashHauling'
},
{
    src: moreMoving,
    text: 'any'
}
]
const cards2 = [
    {
        src: anyMoving,
        text: 'anyMoving'
    },
    {
        src: anyMovingTwo,
        text: 'anyMoving'
    },
    {
        src: moreMoving,
        text: 'Moving'
    },
    {
        src: moreMoving,
        text: 'Moving'
    },
]
const socialMedia = [
    {
        src: facebook,
        link: 'https://uk-ua.facebook.com/'
    },
    {
        src: instagram,
        link: 'https://www.instagram.com/'
    },
    {
        src: twitter,
        link: 'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Duk'
    }
]
const reviews = [
    {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
        title: 'Kathryn Murphy'
    },
    {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
        title: 'Kathryn Murphy'
    },
    {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
        title: 'Kathryn Murphy'
    },
    {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
        title: 'Kathryn Murphy'
    }
]

export const Home = () => {
    return (
        <div className='home_body'>
            <div className='header'>
                <img className='header_img' src={header} alt='header'  />
                <div className='social_media'>
                    <SocialMedia socialMedia={socialMedia}/>
                </div>
            </div>
            <div className='box'>
                <span className='logo'>
                    logo
                </span>
            </div>
            <div className='box'>
                <div className='after_logo'>
                    <p className='slogan'>We make the world a better place</p>
                    <a className='button_play'href='https://www.youtube.com/' ></a>
                </div>
            </div>
            <div className='container bottom_wave'>
                <div className='bottom_wave_block'>
                    <img className='bottom_wave_img' src={bottomWave} alt='bottom'></img>
                    <div className='bottom_wave_text'>
                        <p className='scroll'>Scroll with services</p>
                        <p className='title title_services'>services</p>
                    </div>
                </div>
            </div>
            <div className='container container_services violet'>
                <div className='box'>
                    <div className='card'>
                        <Card cards = {cards}/>
                    </div>
                </div>
            </div>
            <div className='container violet'>
                <div className='box'>
                    <div className='title'>any services</div>
                    <div className='card'>
                        <Card cards = {cards2}/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='box'>
                    <div className='title title_violet'>Testimonials</div>
                    <div className='text_blocks'>
                        <Reviews reviews={reviews}/>
                    </div>
                </div>
            </div>
            <div className='container contact'>
                <div className='box'>
                    <div className='title title_violet'>Contact us</div>
                    <div className='contact_block'>
                        <div className='contact_block_items'>
                            <div className='contact_block_items_field'></div>
                            <div className='contact_block_items_field'></div>
                            <div className='contact_block_items_field'></div>
                        </div>
                        <div className='contact_block_items'>
                            <div className='contact_block_items_contact mail'>test@gmail.com</div>
                            <div className='contact_block_items_contact phone'>(303) 555-0105</div>
                            <div className='contact_block_items_contact adress'>2715 Ash Dr. San Jose, South Dakota 83475</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'></div>
        </div>
    )
}
