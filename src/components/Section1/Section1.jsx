import './Section1.scss';

const Section1 = () => {
    return (
        <section className="section1">
            <div className="container">
                <div className="section1__block">
                    <div className="section1__img">
                    </div>
                    <div className="section1__text">
                        <h2 className="section1__title">About Me</h2>
                        <p className="section1__subtitle">I’m a junior front-end developer looking for a new role in an
                            exciting company. I focus on writing accessible HTML, using modern CSS practices and writing
                            clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to
                            whatever tools are required. I’m based in London, UK, but I’m happy working remotely and
                            have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being
                            out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my
                            work.</p>
                        <div className="main__btn">
                            <a href="#" className="main__btn__link">GO TO PORTFOLIO</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1