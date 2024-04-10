import './navbar.css';
function Navbar() {
    return (
        <div className="header">
            <div className="logo-container"> 
                <p className="logo-text">Logo</p>
            </div>

            
            <nav className="navbar">  
                <ul className="nav-menu">
                    <li className="nav-item">Orders</li>
                    <li className="nav-item">Sign In</li>
                    <li className="nav-item">Cart</li>
                </ul>
            </nav>

            <div className="search-container">
                <input type="text" />
                <button>search</button>
            </div>

        </div>
    )
}
export default Navbar;