import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
        const [LetterClass, setLetterClass] = useState('text-animate')

        useEffect(() => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000)
        },[])

    return (<>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a','c', 't', ' ', 'M', 'e']}
                idx={15}
                />
            </h1>
        </div>
    </div>
    <Loader type="pacman" />
    </>)
}

export default Contact;
