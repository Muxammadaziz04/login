import './Header.scss'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header__block">
                    <div className="header__text">
                        <h1 className="header__title">Hey, I’m Alex Spencer and I love building beautiful websites</h1>
                        <div className="header__btn btn">
                            <div className="btn__scroll">
                                <svg width="18" height="6" viewBox="0 0 18 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.25" d="M1 1L9 5L17 1" stroke="#5FB4A2" />
                                </svg>
                                <svg width="18" height="6" viewBox="0 0 18 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" d="M1 1L9 5L17 1" stroke="#5FB4A2" />
                                </svg>
                                <svg width="18" height="6" viewBox="0 0 18 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L9 5L17 1" stroke="#5FB4A2" />
                                </svg>
                            </div>
                            <div className="btn__link">
                                <a href="#">ABOUT ME</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header