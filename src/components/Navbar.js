import "../assets/navbar.css"
function Navbar()
{

    return (
        <header className="navbar-header">
            <nav className="navbar-nav">
                <div className="nav-logo">
                    <a href="#home"><img src="name.png"/></a>
                </div>
                <div className="nav-menu-container">
                    <ul>
                        <li><a href='#about-me'>About</a></li>
                        <li><a href='#work-experience'>Experience</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        <li><a href='#'>Resume</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
