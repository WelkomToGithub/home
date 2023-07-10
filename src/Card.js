import './card.scss'
export const Card = ({cards}) => {
    return cards.map(({src, text})=> {
        return (
        <div className='card-item'>
            {src && <img className='card-image' src={src} alt='handyman'/>}
            <span className='card-title'> {text}</span>
        </div>)
    })
}
