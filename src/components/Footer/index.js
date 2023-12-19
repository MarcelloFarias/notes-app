import './style.css';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className='text-field'>
                <p>{'<Developed with 💜 by Marcello Farias />'}</p>
            </div>
            <div className='links-field'>
                <a href='https://github.com/MarcelloFarias'><FaGithub/></a>
                <a href='https://www.linkedin.com/in/marcello-rocha-381572231/'><FaLinkedin/></a>
            </div>
        </footer>
    );
}

export default Footer;