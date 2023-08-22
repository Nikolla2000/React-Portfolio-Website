import "./Header.scss"

const Header = () => {
    return (
        <section className="header-section">
            <h1>I'm <span>Nikola</span> Uzunov</h1>
            <div className="img-wrapper">
                <img src="../../src/assets/images/copy.jpg" alt="Image of myself"/>
            </div>
        </section>
    )
}

export default Header