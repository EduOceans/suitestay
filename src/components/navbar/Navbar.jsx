import './Navbar.css';

function Navbar() {
    return (
        <section className="navbar">
            <a href="/" className="navbar-item">Our suites</a>
            <a href="/about" className="navbar-item">About</a>
            <a href="/sign-in" className="navbar-item">Sign In</a>
        </section>
    )
}

export default Navbar;