import { useEffect, useRef } from 'react'
import imageCard from '../assets/3d-blocks.png'
import hexToRgba from '../services/hexToRgba'

function PreviewCard({ properties }) {
    const styles = useRef({
        background: hexToRgba(properties.background, properties.opacity / 100),
        backdropFilter: `blur(${properties.blur}px) saturate(${properties.saturation}%)`
    })

    useEffect(() => {
        styles.current = {
            background: hexToRgba(properties.background, properties.opacity / 100),
            backdropFilter: `blur(${properties.blur}px) saturate(${properties.saturation}%)`
        }
    }, [properties])

    return (
        <div className="preview">
            <div className="card" style={styles.current}>
                <header className="card__heading">
                    <figure className='card__picture'>
                        <img src={imageCard} alt="" />
                    </figure>
                </header>
                <div className="card__content">
                    <h2 className="card__title">The Property of Corresponding Survey</h2>
                    <p className="card__description">Besides, the optimization of the arguments and claims is recognized by The Record of Alternative Expertise </p>
                    <a href="#" className='card__link'>View More</a>
                </div>
            </div>
        </div>
    )
}

export default PreviewCard