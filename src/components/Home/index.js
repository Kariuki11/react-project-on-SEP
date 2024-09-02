import { useState } from 'react';
import LogoTitle from '../../assets/images/logo-s (1).png'
import './index.scss';
import { Link } from 'react-router-dom'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['E', 'N', 'N']
    const jobArray = ['W', 'e', 'B', ' ', 'D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R']


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer"/>
                ENN
                <br />
                Web developer
                </h1>
                <h2>Software Developer / Python Expert / Student</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home