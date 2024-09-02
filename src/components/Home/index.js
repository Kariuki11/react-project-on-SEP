import { useState } from 'react';
import LogoTitle from '../../assets/images/logo-s (1).png'
import './index.scss';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['E', 'N', 'N']
    const jobArray = ['W', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', '0', 'p', 'e', 'r']


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
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