import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup timeout on unmount
    return () => clearTimeout(timeout)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token') // Replace 'gmail', 'template_YeJhZkgb', and 'your-token' with correct values
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Slobodan Gajić,
          <br />
          Serbia,
          <br />
          Branka RadiČevića 19, 22000 <br />
          Sremska Mitrovica <br />
          <br />
          <span>freelancerslobodan@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact












































// import Loader from 'react-loaders';
// import './index.scss';
// import AnimatedLetters from '../AnimatedLetters';
// import { useEffect, useState } from 'react';

// const Contact = () => {
//     const [letterClass, setLetterClass] = useState('text-animate');

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setLetterClass('text-animate-hover');
//         }, 3000);

//         // Cleanup function to clear the timeout
//         return () => clearTimeout(timeout);
//     }, []);

//     return (
//         <>
//             <div className='container contact-page'>
//                 <div className='text-zone'>
//                     <h1>
//                         <AnimatedLetters
//                             letterClass={letterClass} // Pass the updated class to the component
//                             strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
//                             idx={15}
//                         />
//                     </h1>
//                     <p>I am passionate about the tech world, particularly Fintech startups and innovative ideas, and always eager to explore opportunities that foster career growth. With strong programming skills and a solid understanding of the tech landscape, I am excited to collaborate on projects that push boundaries and drive innovation
//                         </p>
//                         <div class='contact-form'>
//                             <form>
//                                 <ul>
//                                     <li className='half'>
//                                         <input type='text' name="name" placeholder='Name' required />
//                                     </li>
//                                     <li className='half'>
//                                         <input type='email'
//                                         name="email"
//                                         placeholder='Email'
//                                         required
//                                         />
//                                     </li>
//                                     <li>
//                                         <input
//                                         type='text'
//                                         name="subject"
//                                         placeholder='Subject'
//                                         required
//                                         />
//                                     </li>
//                                     <li>
//                                         <textarea
//                                         placeholder="Message"
//                                         name="message"
//                                         required
//                                         ></textarea>
//                                     </li>
//                                     <li>
//                                         <input type="submit" className='flat-button' value='SEND' />
//                                     </li>
//                                 </ul>
//                             </form>
//                         </div>
//                 </div>
//             </div>
//             <Loader type="pacman" />
//         </>
//     );
// };

// export default Contact;

































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

