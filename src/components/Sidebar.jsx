function Sidebar() {
    return (
        <div className="sidebar">
            <header className="sidebar__heading">
                <h1 className="sidebar__title" role="heading">Goodmorphism</h1>
            </header>
            <div className="sidebar__tools">
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Background</label>
                    <div className="sidebar__group">
                        <input type="color" className="sidebar__color"/>
                        <input type="text" className="sidebar__input-color"/>
                    </div>
                </div>
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Blur</label>
                    <div className="sidebar__group">
                        <input type="range" className="sidebar__slider"/>
                        <input type="text" className="sidebar__input"/>
                    </div>
                </div>
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Opacity</label>
                    <div className="sidebar__group">
                        <input type="range" className="sidebar__slider"/>
                        <input type="text" className="sidebar__input"/>
                    </div>
                </div>
                <div className="sidebar__tool">
                    <label htmlFor="" className="sidebar__label">Saturation</label>
                    <div className="sidebar__group">
                        <input type="range" className="sidebar__slider"/>
                        <input type="text" className="sidebar__input"/>
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