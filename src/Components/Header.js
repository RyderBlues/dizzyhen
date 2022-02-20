import { Link, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import fbLogo from '../Images/icons8-facebook-50.png';
import igLogo from '../Images/icons8-instagram-50.png';
import dhLogo from '../Images/DHlogo.jpg';

function Header() {

    return (
        <header>
            <img class='headerLogo' src={dhLogo}
            alt ="dizzy hen logo"/>
            <nav class='headerNav'>
                <Router>
                    <Link class='headerLink' to='/Menu'>MENU</Link>
                    <Link class='headerLink' to='/Story'>OUR STORY</Link>
                    <Link class='headerLink headerLinkExtra' to='/Contact'>CONTACT</Link>
                </Router>
                <a href="https://www.facebook.com/thedizzyhen" target="_blank" rel="noreferrer">
                    <img class='fbLogo' src={fbLogo} alt='facebook logo'></img>
                </a>
                <a href="https://www.instagram.com/the_dizzyhen/" target="_blank" rel="noreferrer">
                    <img class='igLogo' src={igLogo} alt='Instagram logo'></img>
                </a>
            </nav>
        </header>
    )
}

export default Header;