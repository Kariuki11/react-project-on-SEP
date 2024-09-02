import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s (1).png';
import LogoSubtitle from '../../assets/images/logo_sub (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Main Logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="Logo Subtitle" />
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