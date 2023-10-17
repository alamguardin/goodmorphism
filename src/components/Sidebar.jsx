function Sidebar({ properties, addProperties} ) {

    const handleChange = (e) => {
        let newProperties = {...properties}
        newProperties[e.target.id] = e.target.value

        addProperties(newProperties)
    }

    return (
        <div className="sidebar">
            <header className="sidebar__heading">
                <figure className="sidebar__brand">
                    <img src="/goodmorphism-brand.svg" alt="Goodmorphism brand" />
                </figure>
                <h1 className="sidebar__title" role="heading">Goodmorphism</h1>
            </header>
            <div className="sidebar__tools">
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Background</label>
                    <div className="sidebar__group">
                        <input type="color" id="background" className="sidebar__color" onChange={handleChange}/>
                        <input type="text" className="sidebar__input-color" disabled value={properties.background}/>
                    </div>
                </div>
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Blur</label>
                    <div className="sidebar__group">
                        <input type="range" id="blur" className="sidebar__slider" min={0} max={25} onChange={handleChange}/>
                        <p className="sidebar__value">{properties.blur}px</p>
                    </div>
                </div>
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Opacity</label>
                    <div className="sidebar__group">
                        <input type="range" id="opacity" className="sidebar__slider" min={0} max={100} onChange={handleChange}/>
                        <p className="sidebar__value">{properties.opacity}%</p>
                    </div>
                </div>
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Saturation</label>
                    <div className="sidebar__group">
                        <input type="range" id="saturation" className="sidebar__slider" min={0} max={200} onChange={handleChange}/>
                        <p className="sidebar__value">{properties.saturation}%</p>
                    </div>
                </div>
            </div>
            <footer className="sidebar__footer">
                <p className="sidebar__author">Made with ❤️ by <a href="#">@alamguardin</a></p>
            </footer>
        </div>
    )
}

export default Sidebar