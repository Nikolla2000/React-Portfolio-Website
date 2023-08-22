import "./Header.scss"

const Header = () => {
    return (
        <header>
            <h1>I'm <span>Nikola</span> Uzunov</h1>
            <div className="img-wrapper">
                <img src="../../src/assets/images/copy.jpg" alt="Image of myself"/>
            </div>
        </header>
    )
}

export default Header