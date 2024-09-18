import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} // Pass the updated class to the component
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>I am passionate about the tech world, particularly Fintech startups and innovative ideas, and always eager to explore opportunities that foster career growth. With strong programming skills and a solid understanding of the tech landscape, I am excited to collaborate on projects that push boundaries and drive innovation
                        </p>
                        <div class='contact-form'>
                            <form>
                                <ul>
                                    <li className='half'>
                                        <input type='text' name="name" placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type='email'
                                        name="email"
                                        placeholder='Email'
                                        required
                                        />
                                    </li>
                                </ul>
                            </form>
                        </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;

































// import Loader from 'react-loaders';
// import './index.scss'
// import AnimatedLetters from '../AnimatedLetters';
// import { useEffect, useState } from 'react';

// const Contact = () => {
//         const [LetterClass, setLetterClass] = useState('text-animate')

//         useEffect(() => {
//             return setTimeout(() => {
//                 setLetterClass('text-animate-hover');
//             }, 3000)
//         },[])

//     return (<>
//     <div className='container contact-page'>
//         <div className='text-zone'>
//             <h1>
//                 <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a','c', 't', ' ', 'M', 'e']}
//                 idx={15}
//                 />
//             </h1>
//         </div>
//     </div>
//     <Loader type="pacman" />
//     </>)
// }

// export default Contact;

