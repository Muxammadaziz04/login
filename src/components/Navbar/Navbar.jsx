import "./Navbar.scss"
import navLogo from '../../assets/img/nav-logo.svg'


const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__block">
                    <a href="#" className="nav__logo">
                        <img src={navLogo} alt="logo" />
                    </a>
                    <input id="burger" type="checkbox" className="burger" />
                    <label htmlFor="burger" className="burger__label">
                        <span className="burger__box">
                            <span className="burger__line"></span>
                        </span>
                    </label>
                    <div className="wrapper">
                        <a className="nav__links wrapper__links" href="#">HOME</a>
                        <a className="nav__links wrapper__links" href="#">PORTFOLIO</a>
                        <a className="nav__links wrapper__links" href="#">CONTACT ME</a>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item"><a class="nav__links" href="#">HOME</a></li>
                        <li className="nav__item"><a class="nav__links" href="#">PORTFOLIO</a></li>
                        <li className="nav__item"><a class="nav__links" href="#">CONTACT ME</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar