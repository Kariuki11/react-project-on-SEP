import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s (1).png';
import LogoSubtitle from '../../assets/images/logo_sub (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Main Logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact={true} activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact={true} activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact={true} activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/kennedy-kariuki-222922286/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Kariuki11'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/kariukii_ken/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.facebook.com/profile.php?id=100080064271087'>
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;




















































// import { Link, NavLink } from 'react-router-dom'
// import './index.scss'
// import LogoS from '../../assets/images/logo-s (1).png'
// import LogoSubtitle from '../../assets/images/logo_sub (1).png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'


// const Sidebar = () => (
//     <div className='nav-bar'>
//         <Link className='logo' to='/'>
//             <img src={LogoS} alt="logo" />
//             <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
//         </Link>
//         <nav>
//             <NavLink exact="true" activeclassname="active" to="/"> 
//                 <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
//             </NavLink>
//             <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
//                 <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//             </NavLink>
//             <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
//                 <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//             </NavLink>
//         </nav>
//     </div>
// )

// export default Sidebar;