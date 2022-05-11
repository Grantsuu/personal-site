import { Container } from 'react-bootstrap';
import logo from '../../../assets/stock-logo.png'
import './index.css';

function Logo() {
    return (
        <div className='Logo-div'>
            <img src={logo} className='Logo-img' alt="Logo" />
        </div>
    )
}

export default Logo;