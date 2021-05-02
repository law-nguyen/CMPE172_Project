import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>SJSU Bookstore</h2>
            <h3>Totally the cheapest books online<br />Definitely not a scam</h3>
            <Link className="btn" to="/books">View All Books</Link>
        </section>
    )
}

export default Hero
