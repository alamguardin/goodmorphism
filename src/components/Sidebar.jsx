import { useState } from "react"

function Sidebar() {
    const [	properties, setProperties] = useState({
		background: '#212A3E',
		blur: 16,
		opacity: 15,
		saturation: 120

	})

    const handleChange = (e) => {
        let newProperties = {...properties}

        if (e.target.id === 'inputColor') {
            newProperties.background = e.target.value
        } else if (e.target.id === 'inputBlur') {
            newProperties.blur = e.target.value
        } else if (e.target.id === 'inputOpacity') {
            newProperties.opacity = e.target.value
        } else if (e.target.id === 'inputSaturation') {
            newProperties.saturation = e.target.value
        }

        setProperties(newProperties)
    }

    return (
        <div className="sidebar">
            <header className="sidebar__heading">
                <h1 className="sidebar__title" role="heading">Goodmorphism</h1>
            </header>
            <div className="sidebar__tools">
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Background</label>
                    <div className="sidebar__group">
                        <input type="color" id="inputColor" className="sidebar__color" onChange={handleChange}/>
                        <input type="text" className="sidebar__input-color" disabled value={properties.background}/>
                    </div>
                </div>
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Blur</label>
                    <div className="sidebar__group">
                        <input type="range" id="inputBlur" className="sidebar__slider" min={0} max={25} onChange={handleChange}/>
                        <input type="text" className="sidebar__input" value={`${properties.blur}px`} disabled/>
                    </div>
                </div>
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Opacity</label>
                    <div className="sidebar__group">
                        <input type="range" id="inputOpacity" className="sidebar__slider" min={0} max={100} onChange={handleChange}/>
                        <input type="text" className="sidebar__input" value={`${properties.opacity}%`} disabled/>
                    </div>
                </div>
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Saturation</label>
                    <div className="sidebar__group">
                        <input type="range" id="inputSaturation" className="sidebar__slider" min={0} max={200} onChange={handleChange}/>
                        <input type="text" className="sidebar__input" value={`${properties.saturation}%`} disabled/>
                    </div>
                </div>
            </div>
            <footer className="sidebar__footer">
                <p className="sidebar__author">Create by <a href="#">@alamguardin</a></p>
            </footer>
        </div>
    )
}

export default Sidebar