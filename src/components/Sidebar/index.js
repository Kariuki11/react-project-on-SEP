import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s (1).png'
import LogoSubtitle from '../../assets/images/logo_sub (1).png'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
        </Link>
    </div>
)

export default Sidebar;