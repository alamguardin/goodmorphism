import imageCard from '../assets/3d-blocks.png'

function PreviewCard() {
    return (
        <div className="preview">
            <div className="card">
                <header className="card__heading">
                    <figure>
                        <img src={imageCard} alt="" />
                    </figure>
                </header>
                <div className="card__content">
                    <h2 className="card__title">The Property of Corresponding Survey</h2>
                    <p className="card__description">Besides, the optimization of the arguments and claims is recognized by The Record of Alternative Expertise </p>
                    <a href="#">View More</a>
                </div>
            </div>
        </div>
    )
}

export default PreviewCard