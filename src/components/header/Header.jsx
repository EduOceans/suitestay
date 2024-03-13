import Navbar from "../navbar/Navbar";

function Header() {
    return (
        <header className="header">
            <section className='header-logo'>
                <a href='/' className='logo'>LOGO</a>
            </section>
            <section className='header-navbar'>
                < Navbar />
            </section>
        </header>
    )
}

export default Header;