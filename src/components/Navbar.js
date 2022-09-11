import logo from '../logo.svg';

function Navbar() {
    return (
        <nav className='nav'>
            <img src={logo} className="nav-icon"/>
            <h3 className='nav-logo-text'>React Facts</h3>
            <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
    )

}

export default Navbar;