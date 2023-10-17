import hexToRgba from '../services/hexToRgba'

function PreviewCard({ properties }) {
    const styles = {
        background: hexToRgba(properties.background, properties.opacity / 100),
        backdropFilter: `blur(${properties.blur}px) saturate(${properties.saturation}%)`
    }

    return (
        <div className='preview'>
            {/* User card */}
            <div className='card' style={styles}>
                <figure className='card__user'>
                    <img src="/img-user.jpg" alt="Alex" />
                </figure>
                <h3 className='card__title'>Jaime Sander</h3>
                <p className='card__legend'>Freelancer</p>
            </div>
            {/* Mini sidebar */}
            <div className='card' style={styles}>
                <a href="" className='card__icon'><i className="ri-home-line"></i></a>
                <a href="" className='card__icon'><i className="ri-bookmark-line"></i></a>
                <a href="" className='card__icon'><i className="ri-settings-line"></i></a>
                <a href="" className='card__icon'><i className="ri-user-line"></i></a>
            </div>
            {/* Popup */}
            <div className='card' style={styles}>
                <button className='card__button'>
                    <i className='ri-google-fill'></i>
                    <span>Sign in with google</span>
                </button>
                <p className='card__description'>By click login you agree to our Terms of Service and Privacy Policy</p>
            </div>
            {/* Input */}
            <div className='card' style={styles}>
                <i className='ri-search-2-line'></i>
                <input type="text" className='card__input' placeholder='Type something'/>
            </div>
            {/* Navbar */}
            <div className='card' style={styles}>
                <ul className='card__list'>
                    <li className='card__item active'>
                        <i className='ri-home-line'></i>
                        <span>Home</span>
                    </li>
                    <li className='card__item'>
                        <i className='ri-service-line'></i>
                        <span>Services</span>
                    </li>
                    <li className='card__item'>
                        <i className='ri-phone-line'></i>
                        <span>Contact</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PreviewCard