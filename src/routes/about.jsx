function About() {
    return (
        <>
            <section className="about">
                <div className="aboutImg"></div>
                <article className="aboutArticle bodyPage">
                    <h2 className="fz_2rem fw_700 lh_2rem">
                        Don’t squeeze in a sedan when you could relax in a van.
                    </h2>
                    <p className="fw_500 lh_1-5rem">
                        Our mission is to enliven your road trip with the
                        perfect travel van rental. Our vans are recertified
                        before each trip to ensure your travel plans can go off
                        without a hitch. (Hitch costs extra 😉)
                    </p>
                    <p className="fw_500 lh_1-5rem">
                        Our team is full of vanlife enthusiasts who know
                        firsthand the magic of touring the world on 4 wheels.
                    </p>

                    <div className="AboutCTA">
                        <h3 className="fw_700 fz_1-5rem">
                            Your destination is waiting.
                            <br />
                            Your van is ready.
                        </h3>

                        <button className="btn black">Explore our vans</button>
                    </div>
                </article>
            </section>
        </>
    );
}

export default About;
